// import { Pinecone, PineconeRecord } from '@pinecone-database/pinecone';
// import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import { downloadFromS3 } from './s3-server';

// import { Document, RecursiveCharacterTextSplitter } from '@pinecone-database/doc-splitter'
// import { getEmbeddings } from './embeddings';

// import md5 from 'md5'
// import { convertToAscii } from './utils';
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { eq } from "drizzle-orm";


// export const getPineconeClient = () => {
//     return new Pinecone({
//         apiKey: process.env.PINECONE_API_KEY!
//     });
// };

// type PDFPage = {
//     pageContent: string;
//     metadata: {
//         loc: { pageNumber: number }
//     }
// }

// export async function loadS3IntoPinecone(url: string, fileKey: string) {
//     //obtain pdf
    
//     console.log('downling pdf to file sys')

//     const file_name = await downloadFromS3(url);


//     if (!file_name) {
//         throw new Error("COuld not download from s3");
//     }

//     const loader = new PDFLoader(file_name);
    
//     const pages = (await loader.load()) as PDFPage[];
//     // console.log(pages)
//     //split and segment in smaller parts

//     const documents = await Promise.all(pages.map(prepareDocument));
//     // console.log(documents)

//     //vectorize and embed it  every smalll doc

//     const vectors = await Promise.all(documents.flat().map(embedDocument))
//     // console.log(vectors)

//     // upload to pinecone

//     const client = await getPineconeClient();
//     const pineconeIndex = client.Index('aipdftest');

//     const namespace = pineconeIndex.namespace(convertToAscii(fileKey));



//     console.log("inserting vectors into pinecone");

//     await namespace.upsert(vectors);
//     try{
//     await db.update(chats).set({ status: 'complete' }).where(eq(chats.fileKey, fileKey));
//     console.log("tried updating status")}
//     catch(e){console.log(e)}
    
//     return documents[0];

// }


// //old
// async function embedDocument(doc: Document) {
//     try {
//         const embeddings = await getEmbeddings(doc.pageContent);
//         // console.log(typeof(doc.pageContent))
//         const hash = md5(doc.pageContent);
//         // console.log(hash)

//         return {
//             id: hash,
//             values: embeddings,
//             metadata: {
//                 text: doc.metadata.text,
//                 pageNumber: doc.metadata.pageNumber,
//             },
//         } as PineconeRecord;


//     } catch (error) {
//         console.log("error embedding document", error);
//         throw error;
//     }
// }


// async function prepareDocument(page: PDFPage) {
//     let { pageContent, metadata } = page;
//     pageContent = pageContent.replace(/\n/g, '');
//     //split doc
//     const splitter = new RecursiveCharacterTextSplitter();
//     const docs = await splitter.splitDocuments([
//         new Document({
//             pageContent,
//             metadata: {
//                 pageNumber: metadata.loc.pageNumber,
//                 text: truncateStringByBytes(pageContent, 36000)
//             }
//         })
//     ])
//     return docs
// }

// export const truncateStringByBytes = (str: string, bytes: number) => {
//     const enc = new TextEncoder();
//     return new TextDecoder('utf-8').decode(enc.encode(str).slice(0, bytes))
// }


//s3 code
// import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
// import { downloadFromS3 } from "./s3-server";
// import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import md5 from "md5";
// import {
//   Document,
//   RecursiveCharacterTextSplitter,
// } from "@pinecone-database/doc-splitter";
// import { getEmbeddings } from "./embeddings";
// import { convertToAscii } from "./utils";

// // export const getPineconeClient = () => {
// //   return new Pinecone({
// //     environment: process.env.PINECONE_ENVIRONMENT!,
// //     apiKey: process.env.PINECONE_API_KEY!,
// //   });
// // };

// export const getPineconeClient = () => {
//     return new Pinecone({
//         apiKey: process.env.PINECONE_API_KEY!
//     });
// };

// type PDFPage = {
//   pageContent: string;
//   metadata: {
//     loc: { pageNumber: number };
//   };
// };

// export async function loadS3IntoPinecone(fileKey: string) {
//   // 1. obtain the pdf -> downlaod and read from pdf
//   console.log("downloading s3 into file system");
//   const file_name = await downloadFromS3(fileKey);
//   if (!file_name) {
//     throw new Error("could not download from s3");
//   }
//   console.log("loading pdf into memory" + file_name);
//   const loader = new PDFLoader(file_name);
//   const pages = (await loader.load()) as PDFPage[];

//   // 2. split and segment the pdf
//   const documents = await Promise.all(pages.map(prepareDocument));

//   // 3. vectorise and embed individual documents
//   const vectors = await Promise.all(documents.flat().map(embedDocument));

//   // 4. upload to pinecone
//   const client = await getPineconeClient();
//   const pineconeIndex = await client.index("chatpdf");
//   const namespace = pineconeIndex.namespace(convertToAscii(fileKey));

//   console.log("inserting vectors into pinecone");
//   await namespace.upsert(vectors);

//   return documents[0];
// }

// async function embedDocument(doc: Document) {
//   try {
//     const embeddings = await getEmbeddings(doc.pageContent);
//     const hash = md5(doc.pageContent);

//     return {
//       id: hash,
//       values: embeddings,
//       metadata: {
//         text: doc.metadata.text,
//         pageNumber: doc.metadata.pageNumber,
//       },
//     } as PineconeRecord;
//   } catch (error) {
//     console.log("error embedding document", error);
//     throw error;
//   }
// }

// export const truncateStringByBytes = (str: string, bytes: number) => {
//   const enc = new TextEncoder();
//   return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
// };

// async function prepareDocument(page: PDFPage) {
//   let { pageContent, metadata } = page;
//   pageContent = pageContent.replace(/\n/g, "");
//   // split the docs
//   const splitter = new RecursiveCharacterTextSplitter();
//   const docs = await splitter.splitDocuments([
//     new Document({
//       pageContent,
//       metadata: {
//         pageNumber: metadata.loc.pageNumber,
//         text: truncateStringByBytes(pageContent, 36000),
//       },
//     }),
//   ]);
//   return docs;
// }



import { Pinecone, PineconeRecord } from '@pinecone-database/pinecone';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { downloadFromS3 } from './s3-server';

import { Document, RecursiveCharacterTextSplitter } from '@pinecone-database/doc-splitter'
import { getEmbeddings } from './embeddings';

import md5 from 'md5';
import { convertToAscii } from './utils';
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const getPineconeClient = () => {
    return new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!
    });
};

type PDFPage = {
    pageContent: string;
    metadata: {
        loc: { pageNumber: number }
    }
};

export async function loadS3IntoPinecone(url: string, fileKey: string) {
    console.log('Downloading PDF from S3 to file system...');

    const file_name = await downloadFromS3(url);
    if (!file_name) {
        throw new Error("Could not download from S3");
    }

    const loader = new PDFLoader(file_name);
    const pages = (await loader.load()) as PDFPage[];

    console.log("Splitting document into smaller parts...");
    const documents = await Promise.all(pages.map(prepareDocument));

    console.log("Embedding document sections...");
    const vectors = await Promise.all(documents.flat().map(embedDocument));

    console.log("Inserting vectors into Pinecone...");
    const client = await getPineconeClient();
    const pineconeIndex = client.Index('aipdftest');
    const namespace = pineconeIndex.namespace(convertToAscii(fileKey));

    await namespace.upsert(vectors);

    console.log("Updating status in database...");
    
    try {
        const existingChat = await db
            .select()
            .from(chats)
            .where(eq(chats.fileKey, fileKey));

        if (existingChat.length > 0) {
            await db
                .update(chats)
                .set({ status: 'complete' })
                .where(eq(chats.fileKey, fileKey));
            console.log("Status updated successfully.");
        } else {
            console.warn(`Chat entry for fileKey ${fileKey} not found.`);
        }
    } catch (error) {
        console.error("Error updating status:", error);
    }

    return documents[0];
}

async function embedDocument(doc: Document) {
    try {
        const embeddings = await getEmbeddings(doc.pageContent);
        const hash = md5(doc.pageContent);

        return {
            id: hash,
            values: embeddings,
            metadata: {
                text: doc.metadata.text,
                pageNumber: doc.metadata.pageNumber,
            },
        } as PineconeRecord;
    } catch (error) {
        console.error("Error embedding document:", error);
        throw error;
    }
}

async function prepareDocument(page: PDFPage) {
    let { pageContent, metadata } = page;
    pageContent = pageContent.replace(/\n/g, '');
    
    const splitter = new RecursiveCharacterTextSplitter();
    const docs = await splitter.splitDocuments([
        new Document({
            pageContent,
            metadata: {
                pageNumber: metadata.loc.pageNumber,
                text: truncateStringByBytes(pageContent, 36000)
            }
        })
    ]);

    return docs;
}

export const truncateStringByBytes = (str: string, bytes: number) => {
    const enc = new TextEncoder();
    return new TextDecoder('utf-8').decode(enc.encode(str).slice(0, bytes));
};
