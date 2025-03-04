

// //working
// // "use client";
// // import { Message } from "ai";
// // import { cn } from "@/lib/utils";
// // import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';
// // import { format } from 'date-fns';

// // export default function MessageList({
// //   messages,
// //   isLoading
// // }: {
// //   messages: Message[];
// //   isLoading: boolean;
// // }) {
// //   return (
// //     <div className="space-y-4 max-w-3xl mx-auto">
// //       {messages.map((message) => (
// //         <div
// //           key={message.id}
// //           className={cn(
// //             "group relative transition-all duration-200 ease-out",
// //             message.role === "user" ? "ml-auto" : "mr-auto"
// //           )}
// //         >
// //           <div className={cn(
// //             "p-3 rounded-2xl text-sm shadow-sm",
// //             message.role === "user" 
// //               ? "bg-blue-600 text-white ml-6" 
// //               : "bg-white text-gray-900 border border-gray-200 mr-6"
// //           )}>
// //             <ReactMarkdown
// //               remarkPlugins={[remarkGfm]}
// //               components={{
// //                 strong: ({ node, ...props }) => (
// //                   <strong className="font-semibold" {...props} />
// //                 ),
// //                 ul: ({ node, ...props }) => (
// //                   <ul className="list-disc pl-5 space-y-1 my-1" {...props} />
// //                 ),
// //                 li: ({ node, ...props }) => (
// //                   <li className="pl-1" {...props} />
// //                 ),
// //                 p: ({ node, ...props }) => (
// //                   <p className="mb-1.5 last:mb-0" {...props} />
// //                 ),
// //               }}
// //               className="prose-sm prose-blue"
// //             >
// //               {message.content}
// //             </ReactMarkdown>
// //             <div className={cn(
// //               "mt-1.5 text-xs",
// //               message.role === "user" ? "text-blue-100" : "text-gray-500"
// //             )}>
// //               {format(new Date(message.createdAt), 'hh:mm a')}
// //             </div>
// //           </div>
// //         </div>
// //       ))}

// //       {isLoading && (
// //         <div className="mr-auto max-w-[85%]">
// //           <div className="bg-white border border-gray-200 rounded-2xl p-3 text-sm animate-pulse">
// //             <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
// //             <div className="h-4 bg-gray-200 rounded w-1/2" />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // components/MessageList.tsx


// "use client";
// import { Message } from "ai";
// import { cn } from "@/lib/utils";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { format } from "date-fns";
// import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";
// import { Button } from "./ui/button";
// import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
// import { toast } from "sonner";

// export default function MessageList({
//   messages,
//   isLoading,
//   onFeedback
// }: {
//   messages: Message[];
//   isLoading: boolean;
//   onFeedback: (messageId: string, feedback: 'like' | 'dislike') => void;
// }) {
//   // const { toast } = useToast();

//   const handleCopy = (content: string) => {
//     navigator.clipboard.writeText(content);
//     toast("Copied to clipboard!");
//   };

//   return (
//     <div className="space-y-4 max-w-3xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={cn(
//             "group relative transition-all duration-200 ease-out",
//             message.role === "user" ? "ml-auto" : "mr-auto"
//           )}
//         >
//           <div
//             className={cn(
//               "p-4 rounded-lg text-sm shadow-md relative",
//               message.role === "user"
//                 ? "bg-gray-800 text-white ml-6"
//                 : "bg-gray-100 text-gray-900 border border-gray-300 mr-6"
//             )}
//           >
//             <ReactMarkdown
//               remarkPlugins={[remarkGfm]}
//               components={{
//                 strong: ({ node, ...props }) => (
//                   <strong className="font-semibold" {...props} />
//                 ),
//                 ul: ({ node, ...props }) => (
//                   <ul className="list-disc pl-5 space-y-1 my-1" {...props} />
//                 ),
//                 li: ({ node, ...props }) => (
//                   <li className="pl-1" {...props} />
//                 ),
//                 p: ({ node, ...props }) => (
//                   <p className="mb-1.5 last:mb-0" {...props} />
//                 ),
//               }}
//               className="prose-sm prose-gray"
//             >
//               {message.content}
//             </ReactMarkdown>
            
//             <div className="flex items-center justify-between mt-2">
//               <div
//                 className={cn(
//                   "text-xs",
//                   message.role === "user" ? "text-gray-400" : "text-gray-600"
//                 )}
//               >
//                 {message.createdAt
//                   ? format(new Date(message.createdAt), "hh:mm a")
//                   : "Just now"}
//               </div>
              
//               {message.role === "assistant" && (
//                 <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleCopy(message.content)}
//                           className="h-6 w-6 p-1 text-gray-500 hover:text-gray-700"
//                         >
//                           <Copy className="h-3 w-3" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Copy</TooltipContent>
//                     </Tooltip>
                    
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => onFeedback(message.id, 'like')}
//                           className="h-6 w-6 p-1 text-green-500 hover:text-green-600"
//                         >
//                           <ThumbsUp className="h-3 w-3" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Like</TooltipContent>
//                     </Tooltip>
                    
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => onFeedback(message.id, 'dislike')}
//                           className="h-6 w-6 p-1 text-red-500 hover:text-red-600"
//                         >
//                           <ThumbsDown className="h-3 w-3" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>Dislike</TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}

//       {isLoading && (
//         <div className="mr-auto max-w-[85%]">
//           <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-sm animate-pulse">
//             <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
//             <div className="h-4 bg-gray-300 rounded w-1/2" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";
import { Message } from "ai";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { toast } from "sonner";
import { useState } from "react";

type FeedbackState = {
  [messageId: string]: 'like' | 'dislike' | null;
};

export default function MessageList({
  messages,
  isLoading,
  onFeedback
}: {
  messages: Message[];
  isLoading: boolean;
  onFeedback: (messageId: string, feedback: 'like' | 'dislike') => void;
}) {
  const [feedbackState, setFeedbackState] = useState<FeedbackState>({});

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast("Content copied to clipboard");
  };
  
  const handleFeedback = (messageId: string, feedback: 'like' | 'dislike') => {
    // Toggle feedback if clicking the same button again
    const newFeedback = feedbackState[messageId] === feedback ? null : feedback;
    
    setFeedbackState(prev => ({
      ...prev,
      [messageId]: newFeedback
    }));
    
    if (newFeedback) {
      onFeedback(messageId, newFeedback);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "group relative transition-all duration-200 ease-out",
            message.role === "user" ? "ml-auto" : "mr-auto"
          )}
        >
          <div
            className={cn(
              "p-5 rounded-lg text-sm shadow-md relative",
              message.role === "user"
                ? "bg-gray-900 text-white ml-6"
                : "bg-white text-gray-800 border border-gray-200 mr-6"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-5 space-y-2 my-2" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-5 space-y-2 my-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="pl-1" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-2 last:mb-0" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 hover:underline" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="pl-4 border-l-4 border-gray-300 text-gray-700 my-2" {...props} />
                ),
                h1: ({ node, ...props }) => (
                  <h1 className="text-xl font-bold my-3" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-lg font-bold my-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-md font-bold my-2" {...props} />
                ),
              }}
              className="prose-sm prose-gray max-w-none"
            >
              {message.content}
            </ReactMarkdown>
            
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
              <div
                className={cn(
                  "text-xs",
                  message.role === "user" ? "text-indigo-100" : "text-gray-500"
                )}
              >
                {message.createdAt
                  ? format(new Date(message.createdAt), "h:mm a, MMM d")
                  : "Just now"}
              </div>
              
              {message.role === "assistant" && (
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(message.content)}
                          className="h-8 w-8 p-1 text-gray-500  hover:bg-gray-100 rounded-full"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Copy response</TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFeedback(message.id, 'like')}
                          className={cn(
                            "h-8 w-8 p-1 rounded-full",
                            feedbackState[message.id] === 'like' 
                              ? "bg-green-100 text-green-900 fill-gray-900" 
                              : "text-gray-500  hover:bg-green-50"
                          )}
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Helpful</TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFeedback(message.id, 'dislike')}
                          className={cn(
                            "h-8 w-8 p-1 rounded-full",
                            feedbackState[message.id] === 'dislike' 
                              ? "bg-red-100 text-red-600" 
                              : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                          )}
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Not helpful</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="mr-auto max-w-[85%]">
          <div className="bg-white border border-gray-200 rounded-lg p-5 text-sm shadow-md animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      )}
    </div>
  );
}