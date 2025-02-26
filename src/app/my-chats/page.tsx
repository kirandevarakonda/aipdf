// "use client"
// import FileUpload from "@/components/FileUpload";
// import { FileText, Home, MessageSquare, ChevronsLeft, ChevronsRight } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { getChatsData } from '../chat/[chatId]/chatUtils';

// type Chat = {
//     id: number;
//     pdfUrl?: string;
//     pdfName: string;
// };

// type ChatPageContentProps = {
//     chatId: string;
//     initialChatsData: Chat[];
// };

// type Props = {
//     params: {
//         chatId: string;
//     };
// };

// export default function mychats({ chatId, initialChatsData }: ChatPageContentProps){
//     const [chats, setChats] = useState(initialChatsData);
//     const [sidebarOpen, setSidebarOpen] = useState(true);
//     // const currentChat = chats.find(chat => chat.id === parseInt(chatId));

//     const chatsData = await getChatsData(chatId);
//     return (
//         <div className="flex">   
//         <FileUpload/> 

        
//          <div className="w-80 border-r bg-white overflow-hidden flex flex-col">
//          <div className="p-4 border-b">
//              <h2 className="text-lg font-semibold flex items-center gap-2">
//                  <MessageSquare className="h-5 w-5 text-primary" />
//                  Chat History
//              </h2>
//          </div>
//          <div className="flex-1 overflow-y-auto p-2">
//              {chats.map((chat) => (
//                  <Link 
//                      href={`/chat/${chat.id}`} 
//                      key={chat.id}
//                      className={cn(
//                          "flex items-center gap-3 p-3 rounded-lg transition-colors",
//                          chat.id === parseInt(chatId)
//                              ? "bg-primary/10 text-primary"
//                              : "hover:bg-gray-100"
//                      )}
//                  >
//                      <FileText className="h-5 w-5 flex-shrink-0" />
//                      <span className="text-sm font-medium truncate">
//                          {chat.pdfName}
//                      </span>
//                  </Link>
//              ))}
//          </div>
//      </div> 
//      </div>
//     );
// }


import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import FileUpload from "@/components/FileUpload";
import { getAuth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { CheckCircle2, Clock, File, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { auth, currentUser } from "@clerk/nextjs/server";
import HeaderAuth from "@/components/Headerauth";
import MainIntro10 from "@/components/MainIntro10";

export default async function Dashboard() {
  const { userId } = auth();
  
  if (!userId) {
    return redirect("/sign-in");
  }

  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));

  return (
    <div>
         <HeaderAuth/>
    <div className="max-w-4xl mx-auto pt-20">
      <div className="flex items-center justify-center mb-8">
        {/* <h1 className="text-2xl font-bold text-gray-900">My Documents</h1> */}
        <FileUpload />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[60%]">Document</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_chats.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No documents uploaded yet
                </TableCell>
              </TableRow>
            ) : (
              _chats.map((chat) => (
                <TableRow key={chat.id} className="group hover:bg-gray-50">
                  <TableCell>
                    <Link
                      href={`/chat/${chat.id}`}
                      className="flex items-center space-x-3"
                    >
                      <File className="h-5 w-5 text-gray-400" />
                      <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                        {chat.pdfName}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    {chat.status === "processing" ? (
                      <div className="flex items-center space-x-2 text-yellow-600">
                        <Clock className="h-4 w-4" />
                        <span>Processing</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Ready</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-sm text-gray-500">
                    {new Date(chat.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
    <MainIntro10/>
    </div>
  );
}

// Loading skeleton for initial load
export function DashboardSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[150px]" />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              {[...Array(3)].map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className="h-4 w-[100px]" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(3)].map((_, i) => (
              <TableRow key={i}>
                {[...Array(3)].map((_, j) => (
                  <TableCell key={j}>
                    <Skeleton className="h-4 w-[80%]" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}