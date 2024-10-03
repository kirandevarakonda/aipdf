"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type MainFooterType = {
  className?: string;
};

const MainFooter: NextPage<MainFooterType> = ({ className = "" }) => {
  const router = useRouter();

  const onLayer3ContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPricingTextClick = useCallback(() => {
    router.push("/pricing");
  }, [router]);

  return (
    <footer className={`w-full bg-slate-950 py-6 text-center text-white font-inter ${className}`}>
      <div className="relative w-full bg-primary-dark py-12">
        <div className="container mx-auto flex flex-col items-center">
          {/* Top Section with call to action */}
          {/* <div className="w-full flex flex-col items-center mb-12">
            <img
              className="w-full max-w-3xl rounded-2xl mb-8"
              alt="Banner"
              src="/rectangle-31.svg"
            />
            <div className="text-2xl font-bold mb-4">✨ Get started</div>
            <h2 className="text-5xl leading-tight font-bold mb-4">
              Ready to try our AI PDF Chat?
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white py-2 px-6 rounded-lg font-semibold">
                View pricing
              </button>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-lg font-semibold border border-gray-600">
                Get started
              </button>
            </div>
          </div> */}
          <div className="relative w-full">
            <img
              className="w-full h-auto rounded-2xl max-w-full"
              alt="Banner"
              src="/rectangle-31.svg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
              <p className="text-2xl font-medium mb-4">✨ Get started</p>
              <h2 className="text-4xl font-bold leading-tight mb-4">
                Ready to try our AI PDF Chat?
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
              </p>
              <div className="flex space-x-4">
                <Link href={"/pricing"}>
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg">
                  View pricing
                </button>
                </Link>
                
                <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg border-2 border-gray-600">
                  Get started
                </button>
              </div>
            </div>
          </div>
          {/* Logo Section */}
          <div className=" py-6 flex items-center gap-2 mb-4 cursor-pointer" onClick={onLayer3ContainerClick}>
            <img alt="Logo Part 1" src="/group-55.svg" className="w-12 h-12"/>
            <img alt="Logo Part 2" src="/aipdfchat1.svg" className="w-28 h-12"/>
          </div>
          {/* Links Section */}
          <div className="flex justify-center gap-12 mb-12 text-lg">
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Use Case</a>
            <a href="/pricing" className="hover:underline" onClick={onPricingTextClick}>Pricing</a>
            <a href="#" className="hover:underline">Affiliates</a>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-6 mb-12">
            <img alt="Social Media Icon" src="/frame4.svg" className="w-8 h-8"/>
            <img alt="Social Media Icon" src="/frame5.svg" className="w-8 h-8"/>
            <img alt="Social Media Icon" src="/frame6.svg" className="w-8 h-8"/>
            <img alt="Social Media Icon" src="/frame7.svg" className="w-8 h-8"/>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-500 w-11/12 mb-4"></div>
          <div className="text-sm">
            © 2024 AI PDF Chat Inc. All rights reserved. ChatGPT Writer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;


// "use client"
// import type { NextPage } from "next";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";

// export type MainFooterType = {
//   className?: string;
// };

// const MainFooter: NextPage<MainFooterType> = ({ className = "" }) => {
//   const router = useRouter();

//   const onPricingTextClick = useCallback(() => {
//     router.push("/AIPDFChat1");
//   }, [router]);

//   return (
//     <div className={`w-full h-[912px] text-center text-sm text-white font-inter ${className}`}>
//       <div className="bg-primary-dark h-3/4 flex flex-col justify-between">
//         <div className="py-4">
//           © 2024 AI PDF Chat Inc. All rights reserved. ChatGPT Writer
//         </div>
//         <div className="flex justify-center space-x-4">
//           <button className="cursor-pointer" onClick={() => router.push("/AIPDFChat")}>
//             <img alt="" src="/group-55.svg" />
//             <img alt="" src="/aipdfchat1.svg" />
//           </button>
//         </div>
//       </div>
//       <div className="bg-gray-700 h-1 flex justify-center">
//         <div className="border-t border-gray-500 w-full"></div>
//       </div>
//       <div className="py-4">
//         <button onClick={onPricingTextClick}>Pricing</button>
//         <button>Features</button>
//         <button>Use Case</button>
//         <button>Affiliates</button>
//       </div>
//     </div>
//   );
// };

// export default MainFooter;