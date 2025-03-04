// // import { db } from '@/lib/db';
// // import { chats } from '@/lib/db/schema';
// // import { loadS3IntoPinecone } from '@/lib/pinecone'
// // import { auth } from '@clerk/nextjs/server';
// // import { NextResponse } from "next/server";
// // import { getS3Url } from "@/lib/s3";
// // import { eq } from 'drizzle-orm';

// // export async function POST(req: Request, res: Response) {

// //     const { userId } = await auth();
// //     if (!userId) {
// //         return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
// //     }

// //     try {

// //         const body = await req.json();

// //         const { url, file_key, file_name } = body;
// //         const pages = await loadS3IntoPinecone(body.storeUrl, file_key);

// //         const chat_id = await db
// //             .insert(chats)
// //             .values({
// //                 fileKey: file_key,
// //                 pdfName: file_name,
// //                 pdfUrl: body.storeUrl,
// //                 // pdfUrl:getS3Url(file_key),
// //                 userId,
// //             })
// //             .returning({
// //                 insertedId: chats.id,
// //             });
// //         await db.update(chats).set({ status: 'complete' }).where(eq(chats.fileKey, file_key));


// //         return NextResponse.json({ chat_id: chat_id[0].insertedId }, { status: 200 });
        

// //     } catch (error) {
// //         console.log(error);
// //         return NextResponse.json(
// //             { error: "Internal server error" },
// //             { status: 500 }
// //         );
// //     }

// // }


// import { db } from '@/lib/db';
// import { chats } from '@/lib/db/schema';
// import { loadS3IntoPinecone } from '@/lib/pinecone'
// import { auth } from '@clerk/nextjs/server';
// import { NextResponse } from "next/server";
// import { getS3Url } from "@/lib/s3";
// import { eq } from 'drizzle-orm';

// export async function POST(req: Request, res: Response) {

//     const { userId } = await auth();
//     if (!userId) {
//         return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
//     }

//     try {

//         const body = await req.json();

//         const { url, file_key, file_name } = body;
//         const pages = await loadS3IntoPinecone(body.storeUrl, file_key);

//         const chat_id = await db
//             .insert(chats)
//             .values({
//                 fileKey: file_key,
//                 pdfName: file_name,
//                 pdfUrl: body.storeUrl,
//                 // pdfUrl:getS3Url(file_key),
//                 userId,
//             })
//             .returning({
//                 insertedId: chats.id,
//             });
//             await db.update(chats).set({ status: 'complete' }).where(eq(chats.fileKey, file_key));


//         return NextResponse.json({ chat_id: chat_id[0].insertedId }, { status: 200 });
        

//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             { error: "Internal server error" },
//             { status: 500 }
//         );
//     }

// }

import { db } from '@/lib/db'; 
import { chats } from '@/lib/db/schema';
import { loadS3IntoPinecone } from '@/lib/pinecone';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { url, file_key, file_name } = body;

        // Insert the chat entry first
        const chat_id = await db
            .insert(chats)
            .values({
                fileKey: file_key,
                pdfName: file_name,
                pdfUrl: body.storeUrl,
                userId,
                status: 'processing' // Initial status
            })
            .returning({ insertedId: chats.id });

        console.log("Inserted chat entry, now processing PDF...");

        // Process and update status after completion
        await loadS3IntoPinecone(body.storeUrl, file_key);

        return NextResponse.json({ chat_id: chat_id[0].insertedId }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
