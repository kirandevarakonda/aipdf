// app/api/chat-status/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { chats } from "@/lib/db/schema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");
  
  if (!chatId) {
    return NextResponse.json({ error: "chatId required" }, { status: 400 });
  }

  const _chats = await db.select()
    .from(chats)
    .where(eq(chats.id, parseInt(chatId)));

  if (_chats.length !== 1) {
    return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  // Return properly typed status data
  return NextResponse.json({
    status: _chats[0].status
  });
}