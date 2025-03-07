import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const userChats = await db.select().from(chats).where(eq(chats.userId, userId));
    
    return NextResponse.json({ count: userChats.length });
  } catch (error) {
    console.error("Error fetching chat count:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
