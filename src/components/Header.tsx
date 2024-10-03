// "use client"
// import type { NextPage } from "next";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// import Link from "next/link";
// // import { auth } from "@/auth";

// export type HeaderType = {
//   className?: string;
//   aipdfchat?: string;
// };

// const Header: NextPage<HeaderType> = ({ className = "", aipdfchat }) => {
//   const router = useRouter();

//   const onLayer2ContainerClick = useCallback(() => {
//     router.push("/AIPDFChat");
//   }, [router]);

//   const onPricingTextClick = useCallback(() => {
//     router.push("/AIPDFChat1");
//   }, [router]);

//   return (
//     <div
//       className={`absolute top-[0px] left-[0px] w-[1920px] h-[90px] text-left text-base text-black font-inter ${className}`}
//     >
//       <div
//         className="absolute h-[55.56%] w-[12.33%] top-[22.22%] right-[71.26%] bottom-[22.22%] left-[16.41%] cursor-pointer"
//         onClick={onLayer2ContainerClick}
//       >
//         <img
//           className="absolute h-full w-[21.11%] top-[0%] right-[78.89%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
//           alt=""
//           src="/group-55.svg"
//         />
//         <img
//           className="absolute h-[69.6%] w-[72.55%] top-[16%] right-[0%] bottom-[14.4%] left-[27.45%] max-w-full overflow-hidden max-h-full"
//           alt=""
//           src={aipdfchat}
//         />
//       </div>
//       <div className="absolute h-[55.56%] w-[28.07%] top-[22.22%] right-[16.41%] bottom-[22.22%] left-[55.52%]">
//         <div className="absolute h-[36%] w-[62.34%] top-[32%] right-[37.66%] bottom-[32%] left-[0%]">
//           <div className="absolute h-full w-[19.94%] top-[0%] left-[0%] font-medium inline-block">
//             Features
//           </div>
//           <div className="absolute h-full w-[21.73%] top-[0%] left-[27.38%] font-medium inline-block">
//             Use Case
//           </div>
//           <div
//             className="absolute h-full w-[15.77%] top-[0%] left-[56.55%] font-medium inline-block cursor-pointer"
//             onClick={onPricingTextClick}
//           >
//             Pricing
//           </div>
//           <div className="absolute h-full w-[20.24%] top-[0%] left-[79.76%] font-medium inline-block">
//             Affiliates
//           </div>
//         </div>
//         <div className="absolute h-full w-[32.1%] top-[0%] right-[0%] bottom-[0%] left-[67.9%] text-center text-xl text-white">
//           <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-primary" />
//           <div className="absolute top-[26%] left-[17.34%] font-semibold">
//           <Link href="/sign-in">
//         <Button>
//         Get Started
//         </Button>
//       </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute h-[101.11%] w-full top-[0%] right-[0%] bottom-[-1.11%] left-[0%] border-gray-400 border-b-[1px] border-solid box-border" />
//     </div>
//   );
// };

// export default Header;

// "use client"
// import type { NextPage } from "next";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export type HeaderType = {
//   className?: string;
//   aipdfchat?: string;
// };

// const Header: NextPage<HeaderType> = ({ className = "", aipdfchat }) => {
//   const router = useRouter();

//   const onPricingTextClick = useCallback(() => {
//     router.push("/AIPDFChat1");
//   }, [router]);

//   return (
//     <div className={`w-full h-[90px] flex items-center justify-between px-8 bg-white ${className}`}>
//       <Link href="/AIPDFChat">
//         <img className="h-full" alt="" src="/group-55.svg" />
//       </Link>
//       <img alt="" src={aipdfchat} className="h-12" />
//       <nav className="flex space-x-4">
//         <Link href="#" className="bold">Features</Link>
//         <Link href="#">Use Case</Link>
//         <Link href="#" onClick={onPricingTextClick}>Pricing</Link>
//         <Link href="#">Affiliates</Link>
//         <Link href="/sign-in">
//           <button className="bg-primary text-white rounded-lg px-4 py-2">Get Started</button>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {AcmeLogo} from "./Logo.jsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Topbar() {
  return (
    <Navbar isBordered isBlurred={false} className="sticky top-0 z-50 bg-white py-3 px-16 w-screen">
      <Link href="/">
      <NavbarBrand className="gap-4">
        
        <div className = "gap-y-10">
        <AcmeLogo />
        </div>
        
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit text-4xl">aipdf.chat</p>
      </NavbarBrand>
      </ Link>
      <NavbarContent className="hidden sm:flex flex-wrap gap-4 font-semibold flex-grow-0" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Use Case
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/pricing">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Affiliates
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem className="px-4">  
        <Link href="/sign-in">
          <button className="bg-primary text-white rounded-lg px-4 py-2">
          {/* <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg> */}
            Get Started</button>
          {/* <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button> */}
        </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
