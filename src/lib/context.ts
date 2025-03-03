import { Pinecone } from "@pinecone-database/pinecone";
import { convertToAscii } from "./utils";
import { getEmbeddings } from "./embeddings";

export async function getMatchesFromEmbeddings(
    embeddings: number[],
    fileKey: string
) {
    try {
        const client = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY!,
        });
        const pineconeIndex = await client.index("aipdftest");
        const namespace = pineconeIndex.namespace(convertToAscii(fileKey));
        const queryResult = await namespace.query({
            topK: 5,
            vector: embeddings,
            includeMetadata: true,
        });
        return queryResult.matches || [];
    } catch (error) {
        console.log("error querying embeddings", error);
        throw error;
    }
}

//old
// export async function getContext(query: string, fileKey: string) {
//     const queryEmbeddings = await getEmbeddings(query);
//     const matches = await getMatchesFromEmbeddings(queryEmbeddings, fileKey);

//     const qualifyingDocs = matches.filter(
//         (match) => match.score && match.score > 0.4
//     );

//     type Metadata = {
//         text: string;
//         pageNumber: number;
//     };

//     let docs = qualifyingDocs.map((match) => (match.metadata as Metadata).text);
//     // 5 vectors
//     return docs.join("\n").substring(0, 3000);
// }

//new
// src/lib/context.ts
export async function getContext(query: string, fileKey: string) {
    const queryEmbeddings = await getEmbeddings(query);
    const matches = await getMatchesFromEmbeddings(queryEmbeddings, fileKey);

    const qualifyingDocs = matches.filter(
        (match) => match.score && match.score > 0.3 // Lower threshold
    );

    type Metadata = {
        text: string;
        pageNumber: number;
    };

    let docs = qualifyingDocs.map((match) => {
        const metadata = match.metadata as Metadata;
        return `[Page ${metadata.pageNumber}] ${metadata.text}`;
    });
    
    return docs.join("\n").substring(0, 3000);
}