// import FileUpload from "@/components/FileUpload";
// import { Button } from "@/components/ui/button";
// import { UserButton, useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { LogInIcon, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { checkSubscription } from "@/lib/subscription";
// import SubscriptionButton from "@/components/SubscriptionButton";
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { eq } from "drizzle-orm";

// import type { NextPage } from "next";
// import GroupComponent16 from "../components/GroupComponent16";
// import GroupComponent6 from "../components/GroupComponent6";
// import GroupComponent15 from "../components/GroupComponent15";
// import GroupComponent3 from "../components/GroupComponent3";
// import GroupComponent18 from "../components/GroupComponent18";
// import GroupComponent10 from "../components/GroupComponent10";
// import GroupComponent17 from "../components/GroupComponent17";
// import GroupComponent from "../components/GroupComponent";
// import GroupComponent8 from "../components/GroupComponent8";
// import GroupComponent1 from "../components/GroupComponent1";
// import Header from "../components/Header";
// import MainFooter from "../components/MainFooter";
// import FreeComponent from "@/components/pricing/FreeComponent";
// import StudentComponent from "@/components/pricing/StudentComponent";
// import ProComponent from "@/components/pricing/ProComponent";
// import TeamComponent from "@/components/pricing/TeamComponent";
// import Header1 from "@/components/Headerauth";

// export default async function Home() {

//   const { userId } = auth();
//   console.log(userId);
//   const isAuth = !!userId;
//   const isPro = await checkSubscription();
//   let firstChat;
  
//   if (userId) {
//     firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
//     if (firstChat) {
//       firstChat = firstChat[0];
//     }
//   }
//   return (
//     // <div >
//     //   <div className="flex">
//     //         {isAuth ? (
//     //           <Header1 />
//     //         ) : (
//     //           <Header />
//     //         )}
//     //       </div>
//     // <div className="w-screen min-h-screen 
//     // [background:linear-gradient(-75.83deg,_rgba(3,_121,_255,_0.16),_rgba(219,_101,_158,_0.16)_52.5%,_rgba(255,_128,_95,_0.16))] h-[566px]">
//     //   {/* <div className="absolute top-20 right-5"> */}

//     //     {/* <UserButton afterSwitchSessionUrl="/" /> */}
//     //   {/* </div> */}

//     //   <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">

//     //     <div className="flex flex-col items-center text-center">

//     //       <div className="flex  items-center">
//     //         <h1 className="mr-3 text-5xl font-semibold">Chat with PDF</h1>

//     //       </div>
//     //       <div className="flex mt-2">

//     //         {isAuth && <Link href='/chat/2' ><Button>Go to chats</Button></Link>}

//     //       </div>
//     //       <p className="max-w-xl mt-1 text-lg text-slate-600">Sign up to use the AI services that both students and working professionals use.</p>

//     //       <div className="w-full mt-4">
//             // {isAuth ? (
//             //   <FileUpload />
//             // ) : (
//             //   <Link href="/sign-in">
//             //     <Button>Login to get Started !
//             //       <LogInIcon className="w-4 h-4 ml-2" />
//             //     </Button>
//             //   </Link>
//     //         )}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     // </div>
//     <div>
//     <div className="bg-white">
//       <div className="flex">
//         {isAuth ? <Header1 /> : <Header />}
//       </div>
//       <main className="flex flex-col items-center">
//         <div className="flex flex-col items-center w-full space-y-24">
//           {/* Hero Section */}
//           <div className="relative w-full h-[566px] text-left text-xl text-white font-inter">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 opacity-30" />
//             <div className="relative flex justify-between h-full max-w-[1200px] my-28 mx-auto px-6">
//               {/* Left side: Text content */}
//               <div className="flex flex-col max-w-[600px] my-5">
//                 <h1 className="text-4xl font-bold text-black">
//                   Talk to <span className="text-primary text-purple">Your PDFs</span>
//                 </h1>
//                 <p className="mt-4 text-lg text-gray-900">
//                   Do not read the long documents, our AI tool is at your help. Summarize the PDF, YouTube video, blog, or Podcast to extract information easily.
//                 </p>
//                 <div className="mt-6">
//                   <Link href="/sign-in">
//                     <button className="bg-primary text-white rounded-lg px-4 py-2">
//                       Get Started for free!
//                     </button>
//                   </Link>
//                 </div>
//               </div>
  
//               {/* Right side: Image and GroupComponent15 */}
//               <div className="ml-12 flex flex-col items-center">
//                 <div className="relative w-[520px] h-[366px]">
//                   {/* <img
//                     className="rounded-2xl w-full h-full"
//                     alt="Visual"
//                     src="/rectangle-4.svg"
//                   /> */}
//                   {/* <div className="absolute top-[245px] left-1/2 transform -translate-x-1/2 w-[480px] h-[26px]"> */}
//                     {/* <div className="leading-[26px] font-medium opacity-[0.8] text-gray-900 text-center">
//                       Or Paste an URL
//                     </div>
//                     <div className="mt-3 w-full h-0 opacity-[0.1]">
//                       <div className="border-black border-t-[1px] border-solid box-border w-[151px] inline-block" />
//                       <div className="border-black border-t-[1px] border-solid box-border w-[151px] inline-block float-right" />
//                     </div>
//                   </div> */}
//                   {/* <div className="absolute top-[296px] left-1/2 transform -translate-x-1/2 w-[480px] h-[50px] text-text-color">
//                     <img
//                       className="absolute top-[0px] left-[0px] rounded-lg w-[402px] h-[50px]"
//                       alt="Input Background"
//                       src="/rectangle-6.svg"
//                     />
//                     <div className="absolute top-[15px] left-[15px] opacity-[0.5] text-gray-700">
//                       https://youtu.be/abc?si=pqr
//                     </div>
//                     <div className="absolute top-[0px] left-[417px] w-[63px] h-[50px] text-xl text-white">
//                       <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary w-full h-full" />
//                       <div className="absolute top-[13px] left-[18px] font-semibold">
//                         Go
//                       </div>
//                     </div>
//                   </div> */}
//                   <div className="absolute top-[0px] left-1/2 transform -translate-x-1/2 w-[480px] h-[200px] text-left text-lg">
                  
                  
//                 {isAuth ? (
//               <FileUpload />
//             ) : (
//               <Link href="/sign-in">
//                 <button className="">
//                 {/* Login to get Started !
                
//                 <LogInIcon className="w-4 h-4 ml-2" /> */}
//                   {/* <LogInIcon className="w-4 h-4 ml-2" /> */}
//                   <div className="absolute top-[13px] left-[58%] transform -translate-x-1/2 w-[385.3px] h-[304px] text-center border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center flex-col border-slate-500">
//                   <div className="flex-col border-4 border-slate-200 border-dashed"> 
//                       <p className="leading-[28px] font-semibold text-gray-900">Please Drop PDF Files</p>
//                       <p className="text-base leading-[26px] text-gray-900">or click to browse</p>
//                       <img
//                         className="absolute top-10 left-40 w-[73px] h-[50px]"
//                         alt="Icon"
//                         src="/vector.svg"
//                       />
//                     </div>
//                     </div>
//                 </button>
//               </Link>
//             )}
//             <div className="flex mt-2">
//             {isAuth && firstChat && (
//               <>
//                 <Link href={`/chat/${firstChat.id}`}>
//                   <Button>
//                     Go to Chats <ArrowRight className="ml-2" />
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </div>
//                     {/* <Link href="/sign-in">
//                       <button>
//                         <img
//                           className="rounded-lg w-full h-full"
//                           alt="Drop PDF"
//                           src="/rectangle-5.svg"
//                         />
//                       </button>
//                     </Link> */}
                   
//                   </div>
//                 </div>
  
//                 {/* GroupComponent15 placed below the image */}
//                 {/* <GroupComponent15 /> */}
//               </div>
//             </div>
//           </div>
//           <GroupComponent15 />
  
//           {/* Pricing Section */}
//           <section className="w-full max-w-[1170px] flex flex-col items-center">
//             <div className="flex space-x-4 mt-4">
//               <FreeComponent />
//               <StudentComponent />
//               <ProComponent />
//               <TeamComponent />
//             </div>
//           </section>
  
//           {/* Testimonials Section */}
//           <section className="w-full max-w-[1350px] flex flex-col items-center">
//             <GroupComponent6
//               propHeight="232px"
//               waysToUseOur="Check out what our "
//               aIPDFSummarizer="users are saying"
//               noTimeToReadPagePDFsLetO="No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast."
//               showGroupDiv={true}
//             />
//             <div className="grid grid-cols-3 gap-3">
//               {Array.from({ length: 6 }).map((_, index) => (
//                 <GroupComponent
//                   key={index}
//                   deeeFrame="/63d261e10022e264952058e1-frame-751-1@2x.png"
//                 />
//               ))}
//             </div>
//             <img className="w-full h-auto mt-2" alt="" src="/group-36.svg" />
//           </section>
  
//           {/* Additional Content Section */}
//           <section className="w-full max-w-[1290px] flex flex-col items-center">
//             <GroupComponent8 />
//             <div className="flex flex-col w-full space-y-4">
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <GroupComponent1 key={index} />
//               ))}
//             </div>
//           </section>
//         </div>
  
//         {/* Footer Section */}
//         <MainFooter />
//       </main>
//     </div>
//   </div>
  
        
    
//   //   <div>
//   //   <div className="bg-white">
//   //     <div className="flex">
//   //           {isAuth ? (
//   //             <Header1 />
//   //           ) : (
//   //             <Header />
//   //           )}
//   //         </div>
//   //     <main className="flex flex-col items-center">
//   //       <div className="flex flex-col items-center w-full space-y-24">
//   //         {/* Hero Section */}
//   //         {/* <GroupComponent16 /> */}
//   //         <div className={`relative w-full h-[566px] text-left text-xl text-white font-inter `}>
//   //     <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 opacity-30" />
//   //     <div className="relative flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
//   //       {/* Left side: Text content */}
//   //       <div className="flex flex-col max-w-[600px]">
//   //         <h1 className="text-4xl font-bold text-black">
//   //           Talk to <span className="text-primary text-purple">Your PDFs</span>
//   //         </h1>
//   //         <p className="mt-4 text-lg text-gray-900">
//   //           Do not read the long documents, our AI tool is at your help. Summarize the PDF, YouTube video, blog, or Podcast to extract information easily.
//   //         </p>
//   //         <div className="mt-6">
//   //           <Link href = "/sign-in"> 
//   //           <button className="bg-primary text-white rounded-lg px-4 py-2">
//   //             Get Started for free!
//   //           </button>
//   //           </Link>
//   //         </div>
//   //       </div>
//   //         <GroupComponent15 />
//   //         <GroupComponent3 />
//   //         <section className="w-full max-w-[1170px] flex flex-col items-center">
//   //           <div className="flex space-x-4 mt-4">

//   //             {/* <GroupComponent10 prop="$0" student="FREE" /> */}
//   //             <FreeComponent />
//   //             {/* <GroupComponent10 prop="$0.99" student="STUDENT" /> */}
//   //             <StudentComponent />
//   //             {/* <GroupComponent10 prop="$6.99" student="PRO" /> */}
//   //             <ProComponent />
//   //             {/* <GroupComponent10 prop="$34.99" student="TEAM" /> */}
//   //             <TeamComponent />
//   //           </div>
//   //         </section>
//   //         <section className="w-full max-w-[1350px] flex flex-col items-center">
//   //           <GroupComponent6
//   //             propHeight="232px"
//   //             waysToUseOur="Check out what our "
//   //             aIPDFSummarizer="users are saying"
//   //             noTimeToReadPagePDFsLetO="No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast."
//   //             showGroupDiv={true}
//   //           />
//   //           <div className="grid grid-cols-3 gap-3">
//   //             {Array.from({ length: 6 }).map((_, index) => (
//   //               <GroupComponent 
//   //                 key={index} 
//   //                 deeeFrame="/63d261e10022e264952058e1-frame-751-1@2x.png" 
//   //               />
//   //             ))}
//   //           </div>
//   //           <img className="w-full h-auto mt-2" alt="" src="/group-36.svg" />
//   //         </section>
//   //         <section className="w-full max-w-[1290px] flex flex-col items-center">
//   //           <GroupComponent8 />
//   //           <div className="flex flex-col w-full space-y-4">
//   //             {Array.from({ length: 5 }).map((_, index) => (
//   //               <GroupComponent1 key={index} />
//   //             ))}
//   //           </div>
//   //         </section>
          
//   //       </div>
//   //       <MainFooter />
//   //       </div>
//   //     </main>
      
//   //   </div>
    
//   // );
//             );
// }




import FileUpload from "../components/FileUpload";
import { Button } from "../components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { LogInIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { checkSubscription } from "@/lib/subscription";
import SubscriptionButton from "../components/SubscriptionButton";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

import Image from "next/image";
import Header from "../components/Header"
import MainIntro from "../components/MainIntro";
import MainIntro2 from "../components/MainIntro2";
import MainIntro3 from "../components/MainIntro3";
import MainIntro4 from "../components/MainIntro4";
import MainIntro5 from "../components/MainIntro5";
import MainIntro6 from "../components/MainIntro6";
import MainIntro7 from "../components/MainIntro7";
import MainIntro8 from "../components/MainIntro8";
import MainIntro9 from "../components/MainIntro9";
import MainIntro10 from "../components/MainIntro10";
import HeaderAuth from "../components/Headerauth";
import ChatComponent from "../components/ChatComponent";
// import HeaderUpgrade from "../../components/HeaderUpgrade";


import type { NextPage } from "next";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const isAuth = !!userId;
  const isPro = await checkSubscription();
  let firstChat;
  
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  return (
    <div className="bg-white">
      <div className="flex">
        {isAuth ? <HeaderAuth /> : <Header />}
      </div>
      {/* Other Sections */}
      <MainIntro isAuth={isAuth}/>
      {/* <div className="flex mt-2">
            {isAuth && firstChat && (
              <>
                <Link href={`/chat/${firstChat.id}`}>
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </>
            )}
            </div> */}
      <MainIntro2 />
      <MainIntro3 />
      <MainIntro4 />
      <MainIntro5 />
      <MainIntro6 />
      <MainIntro7 />
      <MainIntro8 />
      <MainIntro9 />
      <MainIntro10 />
    </div>
    );
}
