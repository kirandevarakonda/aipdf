import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FileUpload from "@/components/FileUpload";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { CheckCircle2, Clock, File } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import HeaderAuth from "@/components/Headerauth";
import MainIntro10 from "@/components/MainIntro10";
import DashboardSkeleton from "@/components/DocumentsTable";

export default async function Docstable() {
  const { userId } = auth();
  
  if (!userId) {
    return redirect("/sign-in");
  }

  const _chats = await db.select().from(chats).where(eq(chats.userId, userId));

  return (
    <div>
      <HeaderAuth />
      <div className="max-w-4xl mx-auto pt-20 pb-8 justify-center items-center">
        <div className="rounded-md border p-5">
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
                      {chat.createdAt
                        ? new Date(chat.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "Unknown"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <MainIntro10 />
    </div>
  );
}