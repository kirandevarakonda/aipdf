import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";


const config = {
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
};
// console.log(config.apiKey);

const genAI = new GoogleGenerativeAI(config.apiKey!);

export async function getEmbeddings(text: string): Promise<number[]> {
    try {
        // Basic input validation
        // if (!text || typeof text !== 'string') {
        //     throw new Error('Invalid input text');
        // }
        // const body = await req.json();

        // const { url, file_key, file_name } = body;

        const cleanedText = text.replace(/\n/g, ' ');
        console.log(cleanedText)
        const model = genAI.getGenerativeModel({ model: 'embedding-001' });

        const result = await model.embedContent(cleanedText);
        const embedding = result.embedding;
        // console.log(embedding);

        if (embedding) {
            // await db.update(chats).set({ status: 'complete' }).where(eq(chats.fileKey, file_key));
            return embedding.values;
        } else {
            throw new Error("No embeddings found in the response.");
        }



    } catch (error) {
        // More specific error handling if needed
        console.error("Embedding error:", error);
        throw error;
    }
}