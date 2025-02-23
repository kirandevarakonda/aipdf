// import * as React from "react"
// import { Check, MessagesSquare, Plus, Send } from "lucide-react"
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";


// import { cn } from "@/lib/utils"
// import {
//     Avatar,
//     AvatarFallback,
//     AvatarImage,
// } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
// } from "@/components/ui/card"

// import { useChat } from "ai/react"
// import { Input } from "./ui/input"
// import { currentUser } from "@clerk/nextjs/server"


// type Props = { chatId: number };


// const ChatComponent = ({ chatId }: Props) => {

//     const { input, handleInputChange, handleSubmit, messages } = useChat({
//         api: "/api/chat",
//         body: {
//             chatId
//         }
//     });

//     React.useEffect(() => {
//         const messageContainer = document.getElementById("message-container");
//         if (messageContainer) {
//             messageContainer.scrollTo({
//                 top: messageContainer.scrollHeight,
//                 behavior: "smooth",
//             });
//         }
//     }, [messages]);



//     return (
//         <div className="w-full h-full">
            
//             <Card className="h-full bg-white border-0 rounded-none ">
//                 <CardHeader className="flex flex-row items-center shadow-lg  mb-2 h-[60px] ">
//                     <div className="flex items-center space-x-4">

//                         <div className="flex  gap-3 items-center justify-center">
//                             <MessagesSquare />
//                             <p className="text-lg font-medium leading-none">Start Chatting</p>
//                         </div>
//                     </div>

//                 </CardHeader>
//                 <CardContent className=" h-full overflow-hidden overflow-y-auto chat-container">
//                     <div className="space-y-4  ">
//                         {messages.map((message, index) => (
//                             <div
//                                 key={index}
//                                 className={cn(
//                                     "flex w-fit flex-col gap-2 rounded-lg px-3 py-2 text-sm",
//                                     message.role === "user"
//                                         ? "ml-auto bg-primary text-primary-foreground"
//                                         : "bg-muted"
//                                 )}

//                             >
//                                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                                     {message.content}
//                                 </ReactMarkdown>
//                             </div>
//                         ))}
//                     </div>
//                 </CardContent>
//                 <CardFooter className="sticky bottom-10 lg:bottom-0 bg-white  p-4 shadow-sm">
//                     <form
//                         onSubmit={handleSubmit}
//                         className="flex w-full items-center space-x-2"
//                     >
//                         <Input
//                             id="message"
//                             placeholder="Type your message..."
//                             className="bg-gray-100 ring-0 focus:ring-0"
//                             autoComplete="off"
//                             value={input}
//                             onChange={handleInputChange}
//                         />

//                         <Button type="submit" size="icon">
//                             <Send className="h-4 w-4" />
//                             <span className="sr-only">Send</span>
//                         </Button>
//                     </form>
//                 </CardFooter>
//             </Card>

//         </div >
//     )
// }

// export default ChatComponent


// import * as React from "react";
// import { Check, MessagesSquare, Send } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// import { cn } from "@/lib/utils";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import { useChat } from "ai/react";
// import { Input } from "./ui/input";

// type Props = { chatId: number };

// const ChatComponent = ({ chatId }: Props) => {
//   const { input, handleInputChange, handleSubmit, messages } = useChat({
//     api: "/api/chat",
//     body: {
//       chatId,
//     },
//   });

//   // Reference to the last message for smooth scrolling
//   const lastMessageRef = React.useRef<HTMLDivElement | null>(null);

//   React.useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className="w-full h-full">
//       <Card className="h-full bg-white border-0 rounded-none">
//         <CardHeader className="flex flex-row items-center shadow-lg mb-2 h-[60px]">
//           <div className="flex items-center space-x-4">
//             <div className="flex gap-3 items-center justify-center">
//               <MessagesSquare />
//               <p className="text-lg font-medium leading-none">Start Chatting</p>
//             </div>
//           </div>
//         </CardHeader>

//         {/* Adding custom scroll styles to the message container */}
//         <CardContent className="h-[calc(100vh-140px)] overflow-y-auto chat-container custom-scrollbar">
//           <div className="space-y-4" id="message-container">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={cn(
//                   "flex w-fit flex-col gap-2 rounded-lg px-3 py-2 text-sm",
//                   message.role === "user"
//                     ? "ml-auto bg-primary text-primary-foreground"
//                     : "bg-muted"
//                 )}
//               >
//                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                   {message.content}
//                 </ReactMarkdown>
//               </div>
//             ))}

//             {/* Empty div used for scrolling to last message */}
//             <div ref={lastMessageRef} />
//           </div>
//         </CardContent>

//         <CardFooter className="sticky bottom-0 bg-white p-4 shadow-sm">
//           <form
//             onSubmit={handleSubmit}
//             className="flex w-full items-center space-x-2"
//           >
//             <Input
//               id="message"
//               placeholder="Type your message..."
//               className="bg-gray-100 ring-0 focus:ring-0 flex-1"
//               autoComplete="off"
//               value={input}
//               onChange={handleInputChange}
//             />
//             <Button type="submit" size="icon">
//               <Send className="h-4 w-4" />
//               <span className="sr-only">Send</span>
//             </Button>
//           </form>
//         </CardFooter>
//       </Card>

//       {/* Adding custom scrollbar styles */}
//       {/* <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #c4c4c4;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background-color: #888;
//         }
//       `}</style> */}
//     </div>
//   );
// };

// export default ChatComponent;


//Summarizethedocument

// import * as React from "react";
// import { Check, MessagesSquare, Send } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// import { cn } from "@/lib/utils";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// import { useChat } from "ai/react";
// import { Input } from "./ui/input";

// type Props = { chatId: number };

// const ChatComponent = ({ chatId }: Props) => {

  
//   const { input, handleInputChange, handleSubmit, setInput, append, messages } = useChat({
//     api: "/api/chat",
//     body: {
//       chatId,
//     },
//   });

//   // Reference to the last message for smooth scrolling
//   const lastMessageRef = React.useRef<HTMLDivElement | null>(null);

//   // Automatically send "Summarize the PDF" when the component is mounted
//   React.useEffect(() => {
//     if (messages.length === 0) {
//       // Set the first input message as "Summarize the PDF"
//       setInput("Summarize the PDF");

//       // Submit the "Summarize the PDF" message automatically
//       handleSubmit();
//     }
//   }, [messages.length, setInput, handleSubmit]);

//   React.useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className="w-full h-full">
//       <Card className="h-full bg-white border-0 rounded-none">
//         <CardHeader className="flex flex-row items-center shadow-lg mb-2 h-[60px]">
//           <div className="flex items-center space-x-4">
//             <div className="flex gap-3 items-center justify-center">
//               <MessagesSquare />
//               <p className="text-lg font-medium leading-none">Start Chatting</p>
//             </div>
//           </div>
//         </CardHeader>

//         {/* Adding custom scroll styles to the message container */}
//         <CardContent className="h-[calc(100vh-140px)] overflow-y-auto chat-container custom-scrollbar">
//           <div className="space-y-4" id="message-container">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={cn(
//                   "flex w-fit flex-col gap-2 rounded-lg px-3 py-2 text-sm",
//                   message.role === "user"
//                     ? "ml-auto bg-primary text-primary-foreground"
//                     : "bg-muted"
//                 )}
//               >
//                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                   {message.content}
//                 </ReactMarkdown>
//               </div>
//             ))}

//             {/* Empty div used for scrolling to last message */}
//             <div ref={lastMessageRef} />
//           </div>
//         </CardContent>

//         <CardFooter className="sticky bottom-0 bg-white p-4 shadow-sm">
//           <form
//             onSubmit={handleSubmit}
//             className="flex w-full items-center space-x-2"
//           >
//             <Input
//               id="message"
//               placeholder="Type your message..."
//               className="bg-gray-100 ring-0 focus:ring-0 flex-1"
//               autoComplete="off"
//               value={input}
//               onChange={handleInputChange}
//             />
//             <Button type="submit" size="icon">
//               <Send className="h-4 w-4" />
//               <span className="sr-only">Send</span>
//             </Button>
//           </form>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default ChatComponent;


//get chat history
// "use client";
// import React from "react";
// import { Input } from "./ui/input";
// import { useChat } from "ai/react";
// import { Button } from "./ui/button";
// import { Send } from "lucide-react";
// import MessageList from "./MessageList";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Message } from "ai";

// type Props = { chatId: number };

// const ChatComponent = ({ chatId }: Props) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["chat", chatId],
//     queryFn: async () => {
//       const response = await axios.post<Message[]>("/api/get-messages", {
//         chatId,
//       });
//       return response.data;
//     },
//   });

//   const { input, handleInputChange, handleSubmit, messages } = useChat({
//     api: "/api/chat",
//     body: {
//       chatId,
//     },
//     initialMessages: data || [],
//   });
//   React.useEffect(() => {
//     const messageContainer = document.getElementById("message-container");
//     if (messageContainer) {
//       messageContainer.scrollTo({
//         top: messageContainer.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);
//   return (
//     <div
//       className="relative max-h-screen overflow-scroll"
//       id="message-container"
//     >
//       {/* header */}
//       <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
//         <h3 className="text-xl font-bold">Chat</h3>
//       </div>

//       {/* message list */}
//       <MessageList messages={messages} isLoading={isLoading} />

//       <form
//         onSubmit={handleSubmit}
//         className="sticky bottom-0 inset-x-0 px-2 py-4 bg-white"
//       >
//         <div className="flex">
//           <Input
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Ask any question..."
//             className="w-full"
//           />
//           <Button className="bg-[#844af9]">
//             <Send className="h-4 w-4" />
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChatComponent;


//Working component but delay
// "use client";
// import React, { useEffect, useRef } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Input } from "./ui/input";
// import { useChat } from "ai/react";
// import { Button } from "./ui/button";
// import { Send, MessagesSquare } from "lucide-react";
// import MessageList from "./MessageList";
// import { Message } from "ai";

// type Props = { chatId: number };

// const ChatComponent = ({ chatId }: Props) => {
//   // Fetch existing messages when component mounts
//   const { data, isLoading } = useQuery({
//     queryKey: ["chat", chatId],
//     queryFn: async () => {
//       const response = await axios.post<Message[]>("/api/get-messages", {
//         chatId,
//       });
//       return response.data;
//     },
//   });

//   const { input, handleInputChange, handleSubmit, setInput, messages } = useChat({
//     api: "/api/chat",
//     body: {
//       chatId,
//     },
//     initialMessages: data || [],
//   });

//   // Automatically send "Summarize the PDF" if no messages exist
//   useEffect(() => {
//     if (messages.length === 0 && !isLoading)  {
//       setInput("Summarize the PDF");
      
//       handleSubmit();
//     }
//   }, [messages.length, setInput, handleSubmit, isLoading]);

//   // Reference for auto-scrolling to the last message
//   const lastMessageRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className="w-full h-full max-h-screen flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
//         <div className="flex items-center space-x-2">
//           <MessagesSquare className="text-primary" />
//           <h3 className="text-lg font-medium">Start Chatting</h3>
//         </div>
//       </div>

//       {/* Message list */}
//       <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" id="message-container">
//         <MessageList messages={messages} isLoading={isLoading} />
//         <div ref={lastMessageRef} />
//       </div>

//       {/* Input section */}
//       <div className="p-4 bg-white shadow-sm sticky bottom-0">
//         <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
//           <Input
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Ask any question..."
//             className="flex-1 bg-gray-100 focus:ring-0 focus:outline-none"
//           />
//           <Button type="submit" size="icon" className="bg-[#844af9]">
//             <Send className="h-4 w-4 text-white" />
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;


"use client";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send, MessagesSquare } from "lucide-react";
import MessageList from "./MessageList";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  // Fetch existing messages when component mounts
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, setInput, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });

  // Automatically send "Summarize the PDF" if no messages exist
  useEffect(() => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const autoSummarize = async () => {
      if (messages.length === 0 && !isLoading) {
        await sleep(2000); // 2-second delay
        setInput("Summarize the PDF");
        handleSubmit();
      }
    };

    autoSummarize();
  }, [messages.length, setInput, handleSubmit, isLoading]);

  // Reference for auto-scrolling to the last message
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-full h-full max-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
        <div className="flex items-center space-x-2">
          <MessagesSquare className="text-primary" />
          <h3 className="text-lg font-medium">Start Chatting</h3>
        </div>
      </div>

      {/* Message list */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" id="message-container">
        <MessageList messages={messages} isLoading={isLoading} />
        <div ref={lastMessageRef} />
      </div>

      {/* Input section */}
      <div className="p-4 bg-white shadow-sm sticky bottom-0">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask any question..."
            className="flex-1 bg-gray-100 focus:ring-0 focus:outline-none"
          />
          <Button type="submit" size="icon" className="bg-[#844af9]">
            <Send className="h-4 w-4 text-white" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
