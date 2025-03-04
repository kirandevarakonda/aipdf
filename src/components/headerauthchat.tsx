import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import aipdfchat from "../../public/aipdfchat.svg";
import {AcmeLogo} from "../../public/logo";
import UpgradeImage from "../../public/lightning01.svg";

export default function HeaderAuthChat({ isSidebar = false }: { isSidebar?: boolean }) {
  return (
    <>
      <div className={isSidebar ? "" : "fixed z-20 w-full"}>
        <header className={`bg-white ${isSidebar ? "h-auto" : "h-[70px]"} items-center ${isSidebar ? "" : "shadow-md"}`}>
          <div className={`${isSidebar ? "flex flex-col items-start p-4 gap-4" : "container mx-auto flex justify-evenly items-center pr-8"}`}>
            {!isSidebar && (
              <Link href="/">
              <div className="flex items-center">
                <AcmeLogo/>
                <Image src={aipdfchat} alt="logo" width={120} height={40} className="hover:cursor-pointer"/>
              </div>
              </Link>
            )}
            
            <div className={isSidebar ? "w-full" : "flex items-center"}>
              <nav className={`${isSidebar ? "flex flex-col space-y-4" : "hidden m-6 md:flex space-x-6"} text-gray-700 font-medium`}>
                <Link href="/my-documents" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">My Documents</Link>
                <Link href="/my-chats" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">My Chats</Link>
                <a href="#" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Multi-Document Chat</a>
                <Link href="/pricing" className="text-golden font-medium tracking-wide hover:font-bold hover:underline">
                  Upgrade <Image src={UpgradeImage} alt="upgrade image" className="inline"/>
                </Link>
              </nav>
            </div>
            
            {!isSidebar && (
              <div className="flex pl-48 gap-2">
                <UserButton afterSwitchSessionUrl="/" />
              </div>
            )}
            
            {isSidebar && (
              <div className="flex items-center mt-4">
                <UserButton afterSwitchSessionUrl="/" />
                <span className="ml-2 text-sm font-medium">Account</span>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

// import React from "react";
// import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import aipdfchat from "../../public/aipdfchat.svg";
// import { AcmeLogo } from "../../public/logo";
// import UpgradeImage from "../../public/lightning01.svg";

// export default function HeaderAuthChat({ isSidebar = false }: { isSidebar?: boolean }) {
//   return (
//     <div className={isSidebar ? "w-full" : "fixed z-20 w-full"}>
//       <header className={`bg-white ${isSidebar ? "h-auto" : "h-[70px]"} ${isSidebar ? "" : "shadow-md"}`}>
//         <div className={`${isSidebar ? "flex flex-col gap-4 p-4" : "container mx-auto flex justify-between items-center px-4 sm:px-6"}`}>
//           {!isSidebar && (
//             <Link href="/" className="flex items-center gap-2">
//               <AcmeLogo />
//               <Image 
//                 src={aipdfchat} 
//                 alt="logo" 
//                 width={120} 
//                 height={40} 
//                 className="hidden sm:block hover:cursor-pointer"
//               />
//             </Link>
//           )}
          
//           <nav className={`${isSidebar ? "flex flex-col" : "hidden md:flex"} gap-4 ${isSidebar ? "w-full" : "items-center"}`}>
//             <Link 
//               href="/my-documents" 
//               className="text-black font-semibold tracking-wide hover:underline text-sm sm:text-base"
//             >
//               My Documents
//             </Link>
//             <Link 
//               href="/my-chats" 
//               className="text-black font-semibold tracking-wide hover:underline text-sm sm:text-base"
//             >
//               My Chats
//             </Link>
//             <Link 
//               href="/multi-document" 
//               className="text-black font-semibold tracking-wide hover:underline text-sm sm:text-base"
//             >
//               Multi-Document Chat
//             </Link>
//             <Link 
//               href="/pricing" 
//               className="text-black font-semibold tracking-wide hover:underline text-sm sm:text-base flex items-center gap-1"
//             >
//               Upgrade
//               <Image 
//                 src={UpgradeImage} 
//                 alt="upgrade" 
//                 className="h-4 w-4 sm:h-5 sm:w-5" 
//               />
//             </Link>
//           </nav>

//           <div className={`${isSidebar ? "mt-4 border-t pt-4" : "flex items-center gap-4"}`}>
//             <UserButton afterSwitchSessionUrl="/" />
//             {isSidebar && (
//               <span className="ml-2 text-sm font-medium text-gray-700">Account Settings</span>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }