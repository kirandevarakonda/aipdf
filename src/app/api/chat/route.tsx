import { getContext } from "@/lib/context";
import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { messages } from '@/lib/db/schema';
import { chats, messages as _messages } from "@/lib/db/schema";
import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages, chatId }: { messages: CoreMessage[], chatId: number } = await req.json();

    const _chats = await db.select().from(chats).where(eq(chats.id, chatId));



    if (_chats.length != 1) {
        return NextResponse.json({ error: "chat not found" }, { status: 404 });
    }

    const fileKey = _chats[0].fileKey;
    const lastMessage = messages[messages.length - 1];
    console.log(lastMessage)


    let lastMessageContent: string = '';

    if (typeof lastMessage === 'string') {
        lastMessageContent = lastMessage;
    } else if (Array.isArray(lastMessage)) {
        lastMessageContent = lastMessage.map(part => (typeof part === 'string' ? part : '')).join('');
    } else if (typeof lastMessage === 'object' && 'content' in lastMessage) {
        lastMessageContent = (lastMessage as { content: string }).content || '';
    }

    // console.log(lastMessageContent)
    // Now you can use lastMessageContent as a string

    // Fetch the context based on the last message content and fileKey
    const context = await getContext(lastMessageContent, fileKey);
    // console.log(context)

    // Construct the prompt as a CoreMessage object
    // const prompt: CoreMessage = {
    //     role: "system",
    //     content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
    //     The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
    //     AI is a well-behaved and well-mannered individual.
    //     AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
    //     AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
    //     AI assistant is a big fan of Pinecone and Vercel.
    //     START CONTEXT BLOCK
    //     ${context}
    //     END OF CONTEXT BLOCK
    //     AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
    //     If the context does not provide the answer to a question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
    //     AI assistant will not apologize for previous responses, but instead will indicate new information was gained.
    //     AI assistant will not invent anything that is not drawn directly from the context.`,
    // };
    const prompt: CoreMessage = {
        role: "system",
        content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
        The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
        AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
        AI assistant is a big fan of Pinecone and Vercel.
      
        START CONTEXT BLOCK
        ${context}
        END OF CONTEXT BLOCK
      
        AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
        
        If the question is about a topic not covered by the provided context, AI assistant will respond with the following structure:
        1. Acknowledge that the context does not cover the answer: "The context provided from the PDF does not contain information about this topic."
        2. Answer the user's question based on general knowledge: AI assistant will then provide the best possible answer using its broad knowledge base.
      
        AI assistant will not apologize for previous responses, but instead will indicate new information was gained.
        AI assistant will not invent anything that is not drawn directly from the context, but will still answer general knowledge questions that are outside the PDF content.`,
      };
      
      

    // Filter user messages and add the prompt as the first message
    const result = await streamText({
        model: google("models/gemini-1.5-flash-latest"),
        system: "You are a helpful assistant",
        messages: [
            prompt, // Include the prompt as the first message
            ...messages.filter(message => message.role === 'user'),
        ],
    });
    console.log(messages);
    // console.log(result);
    // await db.insert(_messages).values({
    //     chatId,
    //     // content: lastMessage.content,
    //     // role: "user",
    //   });
    
    return result.toAIStreamResponse();
    
}



//upload to db
// import { getContext } from "@/lib/context";
// import { db } from "@/lib/db";
// import { chats, messages as _messages } from "@/lib/db/schema";
// import { google } from "@ai-sdk/google";
// import { type CoreMessage, streamText } from "ai";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// export const maxDuration = 30;

// export async function POST(req: Request) {
//   try {
//     // Parse the request body
//     const { messages, chatId }: { messages: CoreMessage[], chatId: number } = await req.json();

//     // Fetch the chat record from the database
//     const _chats = await db.select().from(chats).where(eq(chats.id, chatId));
//     if (_chats.length != 1) {
//       return NextResponse.json({ error: "chat not found" }, { status: 404 });
//     }

//     const fileKey = _chats[0].fileKey;
//     const lastMessage = messages[messages.length - 1];

//     // Get last message content for the context
//     let lastMessageContent: string = '';
//     if (typeof lastMessage === 'string') {
//       lastMessageContent = lastMessage;
//     } else if (Array.isArray(lastMessage)) {
//       lastMessageContent = lastMessage.map(part => (typeof part === 'string' ? part : '')).join('');
//     } else if (typeof lastMessage === 'object' && 'content' in lastMessage) {
//       lastMessageContent = (lastMessage as { content: string }).content || '';
//     }

//     // Fetch the context based on the last message content and fileKey
//     const context = await getContext(lastMessageContent, fileKey);

//     // Construct the system prompt
//     const prompt: CoreMessage = {
//         role: "system",
//         content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
//         The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
//         AI is a well-behaved and well-mannered individual.
//         AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
//         AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
//         AI assistant is a big fan of Pinecone and Vercel.
      
//         START CONTEXT BLOCK
//         ${context}
//         END OF CONTEXT BLOCK
      
//         AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
        
//         If the question is about a topic not covered by the provided context, AI assistant will respond with the following structure:
//         1. Acknowledge that the context does not cover the answer: "The context provided from the PDF does not contain information about this topic."
//         2. Answer the user's question based on general knowledge: AI assistant will then provide the best possible answer using its broad knowledge base.
      
//         AI assistant will not apologize for previous responses, but instead will indicate new information was gained.
//         AI assistant will not invent anything that is not drawn directly from the context, but will still answer general knowledge questions that are outside the PDF content.`,
//       };

//     // Filter user messages and add the prompt as the first message
//     const result = await streamText({
//       model: google("models/gemini-1.5-flash-latest"),
//       system: "You are a helpful assistant",
//       messages: [
//         prompt,
//         ...messages.filter((message) => message.role === 'user'),
//       ],
//     });
//     console.log(messages);
//     // console.log(lastMessageContent);
//     // Save the user message into the database
//     await db.insert(_messages).values({
//       chatId,
//       content: lastMessageContent,
//       role: "user",
//     });
    

//     // Stream the AI response
//     let aiResponseContent = lastMessage.content;

//     const valueToInsert = typeof lastMessage.content === 'string'
//   ? lastMessage.content // Use as is if it's already a string
//   : JSON.stringify(lastMessage.content);

//     // Save the AI response in the database
//     await db.insert(_messages).values({
//       chatId,
//       content: lastMessageContent,
//       role: "assistant",
//     });

//     // Return the streamed AI response
//     // return NextResponse.json({
//     //   stream: aiResponseContent,
//     // });

//     return result.toAIStreamResponse();
    

//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
  
// }
