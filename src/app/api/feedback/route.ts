// app/api/feedback/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';
import { db } from '@/lib/db';
import { messages, chats } from '@/lib/db/schema';

export async function POST(req: Request) {
  try {
    // Authentication
    const { userId } = auth();
    if (!userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Validate request body
    const body = await req.json();
    const { messageId, feedback } = body;
    
    if (!messageId || !feedback || !['like', 'dislike'].includes(feedback)) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    // Verify message ownership
    const messageQuery = await db
      .select()
      .from(messages)
      .innerJoin(chats, eq(messages.chatId, chats.id))
      .where(and(
        eq(messages.id, messageId),
        eq(chats.userId, userId)
      ));

    if (!messageQuery.length) {
      return NextResponse.json(
        { error: 'Message not found or unauthorized' },
        { status: 404 }
      );
    }

    // Update feedback
    const updatedMessage = await db
      .update(messages)
      .set({ feedback })
      .where(eq(messages.id, messageId))
      .returning();

    return NextResponse.json(updatedMessage[0]);

  } catch (error) {
    console.error('[FEEDBACK_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}