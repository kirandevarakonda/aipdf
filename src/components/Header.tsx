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
//       className={absolute top-[0px] left-[0px] w-[1920px] h-[90px] text-left text-base text-black font-inter ${className}}
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
//     <div className={w-full h-[90px] flex items-center justify-between px-8 bg-white ${className}}>
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
"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {AcmeLogo} from "../../public/logo";
import Image from "next/image";
import aipdfchat from "../../public/aipdfchat.svg";
import { Button } from "@/components/ui/button";
 import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Pricing from "../app/pricing/page.jsx";

export default function Topbar() {
  return (
<div className="fixed z-20 w-full">
    <header className="bg-white h-[70px] items-center shadow-md">
      <div className="container mx-auto flex justify-between items-center pl-24 pr-8">
        <Link href="/">
        <div className="flex items-center gap-5">
          <AcmeLogo/>
          <Image src={aipdfchat} alt="logo" width={120} height={40} className="hover:cursor-pointer"/>
        </div>
        </Link>
        <div className="flex items-center">
        <nav className="hidden m-6 md:flex space-x-6 text-gray-700 font-medium">
          <AnchorLink href="#features" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Features</AnchorLink>
          <AnchorLink href="#usecases" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Use Case</AnchorLink>
          <Link href="/pricing" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Pricing</Link>
          <AnchorLink href="#affiliates" className="text-black font-semibold tracking-wide hover:font-bold hover:underline">Affiliates</AnchorLink>
        </nav>
        <Link href="/sign-in">
          <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition">
            Get Started
          </button>
        </Link>
        </div>
      </div>
    </header>
    </div>
  );
}