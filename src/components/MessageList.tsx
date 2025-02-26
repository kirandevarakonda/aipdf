// import { cn } from "@/lib/utils";
// import { Message } from "ai/react";
// import { Loader2 } from "lucide-react";
// import React from "react";

// type Props = {
//   isLoading: boolean;
//   messages: Message[];
// };

// const MessageList = ({ messages, isLoading }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <Loader2 className="w-6 h-6 animate-spin" />
//       </div>
//     );
//   }
//   if (!messages) return <></>;
//   return (
//     <div className="flex flex-col gap-2 px-4">
//       {messages.map((message) => {
//         return (
//           <div
//             key={message.id}
//             className={cn("flex", {
//               "justify-end pl-10": message.role === "user",
//               "justify-start pr-10": message.role === "assistant",
//             })}
//           >
//             <div
//               className={cn(
//                 "rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10",
//                 {
//                   "bg-[#844af9] text-white": message.role === "user",
//                 }
//               )}
//             >
//               <p>{message.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MessageList;

// import React from "react";
// import { Loader2 } from "lucide-react";
// import { Message } from "ai/react";
// import { cn } from "@/lib/utils";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// type Props = {
//   isLoading: boolean;
//   messages: Message[];
//   processing: boolean;
// };

// const MessageList = ({ messages, isLoading, processing }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center w-full h-full">
//         <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
//       </div>
//     );
//   }

//   if (processing) {
//     return (
//       <div className="flex items-center justify-center w-full h-full">
//         <p className="text-gray-500">PDF is being processed. Please wait...</p>
//       </div>
//     );
//   }

//   if (!messages.length) {
//     return <p className="text-center text-gray-500">No messages yet...</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={cn("flex", {
//             "justify-end": message.role === "user",
//             "justify-start": message.role === "assistant",
//           })}
//         >
//           <div
//             className={cn(
//               "rounded-lg px-4 py-2 text-sm shadow-md max-w-[80%]",
//               message.role === "user" 
//                 ? "bg-[#844af9] text-white" 
//                 : "bg-gray-200"
//             )}
//           >
//             <ReactMarkdown 
//               remarkPlugins={[remarkGfm]}
//               components={{
//                 ul: ({ node, ...props }) => (
//                   <ul className="list-disc pl-4" {...props} />
//                 ),
//                 ol: ({ node, ...props }) => (
//                   <ol className="list-decimal pl-4" {...props} />
//                 ),
//                 // Add more custom components as needed
//               }}
//             >
//               {message.content}
//             </ReactMarkdown>
//             {message.role === "assistant" && (
//               <p className="text-xs text-gray-500 mt-2">
//                 Source pages are cited in parentheses
//               </p>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageList;


"use client";
import { Message } from "ai";
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

export default function MessageList({
  messages,
  isLoading
}: {
  messages: Message[];
  isLoading: boolean;
}) {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "group relative transition-all duration-200 ease-out",
            message.role === "user" ? "ml-auto" : "mr-auto"
          )}
        >
          <div className={cn(
            "p-3 rounded-2xl text-sm shadow-sm",
            message.role === "user" 
              ? "bg-blue-600 text-white ml-6" 
              : "bg-white text-gray-900 border border-gray-200 mr-6"
          )}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-5 space-y-1 my-1" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="pl-1" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-1.5 last:mb-0" {...props} />
                ),
              }}
              className="prose-sm prose-blue"
            >
              {message.content}
            </ReactMarkdown>
            <div className={cn(
              "mt-1.5 text-xs",
              message.role === "user" ? "text-blue-100" : "text-gray-500"
            )}>
              {format(new Date(message.createdAt), 'hh:mm a')}
            </div>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="mr-auto max-w-[85%]">
          <div className="bg-white border border-gray-200 rounded-2xl p-3 text-sm animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      )}
    </div>
  );
}

//formatted response
// import React from "react";
// import { Loader2 } from "lucide-react";
// import { Message } from "ai/react";
// import { cn } from "@/lib/utils";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// type Props = {
//   isLoading: boolean;
//   messages: Message[];
// };

// const MessageList = ({ messages, isLoading }: Props) => {
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center w-full h-full">
//         <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
//       </div>
//     );
//   }

//   if (!messages.length) {
//     return <p className="text-center text-gray-500">No messages yet...</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={cn("flex", {
//             "justify-end": message.role === "user",
//             "justify-start": message.role === "assistant",
//           })}
//         >
//           <div
//             className={cn(
//               "rounded-lg px-4 py-2 text-sm shadow-md",
//               message.role === "user" ? "bg-[#844af9] text-white" : "bg-gray-200"
//             )}
//           >
//             {/* Render message content as Markdown */}
//             <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MessageList;

