"use client";
// // import Image from "next/image";
// // import chechMark from "../public/frame.svg"
// // const MainIntro5 = () => {
// //   return (
// //     <div className="mt-8 tracking-normal">
// //         <div className="flex justify-center items-center gap-5">
// //            <div className="w-[300px] h-[580px] flex flex-col border-2 p-4 rounded-lg hover:border-gray-300 hover:border-4">
// //               <div className="font-bold text-2xl">FREE</div>
// //               <div className="max-w-[260px] text-sm pt-3 text-gray-500">Ideal for anyone interested in AI, this plan offers limited access to all core features.</div>
// //               <div className="pt-3 font-bold text-2xl">$0<span className="font-normal text-lg text-gray-400">/month</span></div>
// //               <div className="pt-6">
// //               <button className="border-gray-400 p-2 w-full rounded-xl  bg-customPurple hover:bg-blue-500 text-white">Get started</button>
// //               </div>
// //               <div className="flex gap-2 pt-6 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Up to 60 pages</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Up to 10 answers</span>
// //               </div>
// //            </div>
// //            <div className="w-[300px] h-[580px] flex flex-col border-2 p-4 rounded-lg hover:border-gray-300 hover:border-4">
// //               <div className="font-bold text-2xl">STUDENT</div>
// //               <div className="max-w-[260px] text-sm pt-3 text-gray-500">Ideal for anyone interested in AI, this plan offers limited access to all core features.</div>
// //               <div className="pt-3 font-bold text-2xl">$1.99<span className="font-normal text-lg text-gray-400">/month</span></div>
// //               <div className="pt-6">
// //               <button className="border-gray-400 p-2 w-full rounded-xl bg-customPurple hover:bg-blue-500 text-white">Get started</button>
// //               </div>
// //               <div className="flex gap-2 pt-6 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Access to basic features</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Up to 200 free Pages</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">$0.02 per additional page</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Basic chat support</span>
// //               </div>
// //            </div>
// //            <div className="w-[300px] h-[580px] flex flex-col border-4 p-4 rounded-lg border-[rgb(3,121,255)] hover:border-customPurple">
// //               <div className="font-bold text-3xl text-fuchsia-600 flex">PRO
// //                 <span className="text-lg font-normal p-1 pl-2 pr-2 bg-gray-200 border-1 rounded-2xl ml-2">most popular✨</span>
// //               </div>
// //               <div className="max-w-[260px] text-sm pt-3 text-gray-500">Ideal for anyone interested in AI, this plan offers limited access to all core features.</div>
// //               <div className="pt-3 font-bold text-2xl">$9.99<span className="font-normal text-lg text-gray-400">/month</span></div>
// //               <div className="pt-5">
// //               <button className="border-gray-400 p-2 w-full rounded-xl bg-customPurple hover:bg-blue-500 text-white">Get started</button>
// //               </div>
// //               <div className="flex gap-2 pt-6 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Access to basic features</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Up to 500 free pages</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">$0.02 per additional page</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">3 users included</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Premium chat support</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Uses GPT 4.0 model</span>
// //               </div>
// //            </div>
// //            <div className="w-[300px] h-[580px] flex flex-col border-2 p-4 rounded-lg hover:border-gray-300 hover:border-4">
// //               <div className="font-bold text-2xl">TEAM</div>
// //               <div className="max-w-[260px] text-sm pt-3 text-gray-500">Ideal for anyone interested in AI, this plan offers limited access to all core features.</div>
// //               <div className="pt-3 font-bold text-2xl">$49.99<span className="font-normal text-lg text-gray-400">/month</span></div>
// //               <div className="pt-6">
// //               <button className="border-gray-400 p-2 w-full rounded-xl bg-customPurple hover:bg-blue-500 text-white">Get started</button>
// //               </div>
// //               <div className="flex gap-2 pt-6 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Access to basic features</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Up to 5000 free pages</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">$0.01 per additional page</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">10 users included</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Premium chat support</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Uses GPT 4.0 model</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Department & folder level permissions</span>
// //               </div>
// //               <div className="flex gap-2 pb-1">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">OCR images & scanned text</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Image src={chechMark} alt="check mark"/>
// //                 <span className="font-semibold">Response personalization</span>
// //               </div>
// //            </div>
// //         </div>
// //     </div>
// //   );
// // }

// // export default MainIntro5;


// //working pricing page
// // import Image from "next/image";
// // import checkMark from "../public/frame.svg";

// // const plans = [
// //   {
// //     name: "FREE",
// //     price: "$0",
// //     description: "Ideal for anyone interested in AI, this plan offers limited access to all core features.",
// //     features: ["Up to 60 pages", "Up to 10 answers"],
// //   },
// //   {
// //     name: "STUDENT",
// //     price: "$1.99",
// //     description: "Ideal for students, this plan offers extended access to core features.",
// //     features: [
// //       "Access to basic features",
// //       "Up to 200 free pages",
// //       "$0.02 per additional page",
// //       "Basic chat support",
// //     ],
// //   },
// //   {
// //     name: "PRO",
// //     price: "$9.99",
// //     description: "Ideal for professionals, this plan offers full access to premium features.",
// //     features: [
// //       "Access to basic features",
// //       "Up to 500 free pages",
// //       "$0.02 per additional page",
// //       "3 users included",
// //       "Premium chat support",
// //       "Uses GPT 4.0 model",
// //     ],
// //     highlight: true,
// //   },
// //   {
// //     name: "TEAM",
// //     price: "$49.99",
// //     description: "Ideal for teams, this plan offers advanced permissions and collaboration.",
// //     features: [
// //       "Access to basic features",
// //       "Up to 5000 free pages",
// //       "$0.01 per additional page",
// //       "10 users included",
// //       "Premium chat support",
// //       "Uses GPT 4.0 model",
// //       "Department & folder level permissions",
// //       "OCR images & scanned text",
// //       "Response personalization",
// //     ],
// //   },
// // ];

// // const MainIntro5 = () => {
// //   return (
// //     <div className="mt-8 tracking-normal px-4">
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
// //         {plans.map((plan, index) => (
// //           <div
// //             key={index}
// //             className={`flex flex-col border-2 p-6 rounded-lg transition-all duration-300 hover:border-gray-300 hover:border-4 ${
// //               plan.highlight ? "border-4 border-blue-500 hover:border-fuchsia-700" : ""
// //             }`}
// //           >
// //             <div className="font-bold text-2xl flex items-center">
// //               {plan.name=="PRO"?<div className="font-bold text-3xl text-fuchsia-600 flex ">Pro</div>:<div>{plan.name}</div>}
// //               {plan.highlight && (
// //                 <span className="p-1 ml-2 bg-gray-200 rounded-xl font-medium text-xl text-fuchsia-600 flex">most popular ✨</span>
// //               )}
// //             </div>
// //             <div className="text-sm pt-3 text-gray-500">{plan.description}</div>
// //             <div className="pt-3 font-bold text-2xl">
// //               {plan.price}
// //               <span className="font-normal text-lg text-gray-400">/month</span>
// //             </div>
// //             <div className="pt-6">
// //               <button className="w-full p-2 rounded-xl bg-customPurple hover:bg-blue-500 text-white">
// //                 Get started
// //               </button>
// //             </div>
// //             <div className="pt-6 space-y-2">
// //               {plan.features.map((feature, i) => (
// //                 <div key={i} className="flex gap-2 items-center">
// //                   <Image src={checkMark} alt="check mark" />
// //                   <span className="font-semibold text-sm">{feature}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainIntro5;



// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import checkMark from "../../public/frame.svg";
// import { Button } from "./ui/button";

// const plans = [
//   {
//     name: "FREE",
//     price: "$0",
//     description: "Ideal for anyone interested in AI, this plan offers limited access to all core features.",
//     features: ["Up to 60 pages", "Up to 10 answers"],
//   },
//   {
//     name: "STUDENT",
//     price: "$1.99",
//     description: "Ideal for students, this plan offers extended access to core features.",
//     features: [
//       "Access to basic features",
//       "Up to 200 free pages",
//       "$0.02 per additional page",
//       "Basic chat support",
//     ],
//   },
//   {
//     name: "PRO",
//     price: "$9.99",
//     description: "Ideal for professionals, this plan offers full access to premium features.",
//     features: [
//       "Access to basic features",
//       "Up to 500 free pages",
//       "$0.02 per additional page",
//       "3 users included",
//       "Premium chat support",
//       "Uses GPT 4.0 model",
//     ],
//     highlight: true,
//   },
//   {
//     name: "TEAM",
//     price: "$49.99",
//     description: "Ideal for teams, this plan offers advanced permissions and collaboration.",
//     features: [
//       "Access to basic features",
//       "Up to 5000 free pages",
//       "$0.01 per additional page",
//       "10 users included",
//       "Premium chat support",
//       "Uses GPT 4.0 model",
//       "Department & folder level permissions",
//       "OCR images & scanned text",
//       "Response personalization",
//     ],
//   },
// ];

// const MainIntro5 = () => {
//   const [visible, setVisible] = useState<{ [key: number]: boolean }>({});
//   const sectionRefs = plans.map(() => useRef<HTMLDivElement>(null));
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, index) => {
//           if (entry.isIntersecting) {
//             setVisible((prev) => ({ ...prev, [index]: true }));
//           }
//         });
//       },
//       { 
//         threshold: isMobile ? 0.1 : 0.2,
//         rootMargin: isMobile ? "0px 0px 0px -50px" : "0px 0px 0px -100px"
//       }
//     );

//     sectionRefs.forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       window.removeEventListener('resize', checkMobile);
//       sectionRefs.forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [isMobile]);

//   return (
//     <div id="pricing" className="mt-8 tracking-normal px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               ref={sectionRefs[index]}
//               className={`flex flex-col border-2 p-4 sm:p-6 rounded-lg transition-all duration-500 ease-out ${
//                 visible[index] ? 
//                 "opacity-100 translate-x-0" : 
//                 "opacity-0 translate-x-[-20px]"
//               } ${
//                 plan.highlight
//                   ? "border-transparent bg-white relative overflow-hidden shadow-lg"
//                   : "border-gray-200"
//               } md:hover:scale-[1.02] transform-gpu`}
//               style={plan.highlight ? { 
//                 borderImage: "linear-gradient(90deg, #ff8a00, #e52e71) 1",
//                 borderImageSlice: 1
//               } : {}}
//             >
//               {/* Pro Plan Highlight */}
//               {plan.highlight && (
//                 <div className="relative">
//                   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 p-[2px]" />
//                   <div className="relative w-full h-full bg-white rounded-lg p-4">
//                     {/* ... (keep existing pro plan content) */}
                
//                 <div className="relative w-full h-full bg-white rounded-lg p-1">
//                   <div className="flex flex-col sm:flex-row items-start sm:items-center">
//                     <div className="font-bold text-2xl sm:text-4xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
//                       Pro
//                     </div>
//                     <span className="mt-1 sm:mt-0 sm:ml-2 px-2 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-medium text-sm sm:text-base">
//                       Most Popular ✨
//                     </span>
//                   </div>
//                   <div className="text-xs sm:text-sm pt-2 sm:pt-3 text-gray-500">{plan.description}</div>
//                   <div className="pt-2 sm:pt-3 font-bold text-xl sm:text-2xl">
//                     {plan.price}
//                     <span className="font-normal text-sm sm:text-lg text-gray-400">/month</span>
//                   </div>
//                   <div className="pt-4 sm:pt-6">
//                     <Button className="w-full p-2 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-purple-600 text-white transition-all duration-300">
//                       Get started
//                     </Button>
//                   </div>
//                   <div className="pt-4 sm:pt-6 space-y-2">
//                     {plan.features.map((feature, i) => (
//                       <div key={i} className="flex gap-2 items-start">
//                         <Image 
//                           src={checkMark} 
//                           alt="check mark" 
//                           className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//                         />
//                         <span className="font-semibold text-xs sm:text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//                   </div>
//               )}

//               {/* Other Plans */}
//               {!plan.highlight && (
//                 <div className="h-full flex flex-col">
//                   {/* ... (keep existing other plan content) */}
//                   <div className="font-bold text-xl sm:text-2xl">{plan.name}</div>
//                 <div className="text-xs sm:text-sm pt-2 sm:pt-3 text-gray-500">{plan.description}</div>
//                 <div className="pt-2 sm:pt-3 font-bold text-xl sm:text-2xl">
//                   {plan.price}
//                   <span className="font-normal text-sm sm:text-lg text-gray-400">/month</span>
//                 </div>
//                 <div className="pt-4 sm:pt-6">
//                   <Button className="w-full p-2 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-purple-600 text-white transition-all duration-300">
//                     Get started
//                   </Button>
//                 </div>
//                 <div className="pt-4 sm:pt-6 space-y-2">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className="flex gap-2 items-start">
//                       <Image 
//                         src={checkMark} 
//                         alt="check mark" 
//                         className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//                       />
//                       <span className="font-semibold text-xs sm:text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainIntro5;

// // const MainIntro5 = () => {
// //   const [visible, setVisible] = useState<{ [key: number]: boolean }>({});
// //   const sectionRefs = plans.map(() => useRef<HTMLDivElement>(null));

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry, index) => {
// //           if (entry.isIntersecting) {
// //             setVisible((prev) => ({ ...prev, [index]: true }));
// //           }
// //         });
// //       },
// //       { threshold: 0.3 }
// //     );

// //     sectionRefs.forEach((ref) => {
// //       if (ref.current) observer.observe(ref.current);
// //     });

// //     return () => {
// //       sectionRefs.forEach((ref) => {
// //         if (ref.current) observer.unobserve(ref.current);
// //       });
// //     };
// //   }, []);

// //   return (
// //     <div id="pricing" className="mt-8 tracking-normal px-4 sm:px-6 lg:px-8">
// //     <div className="max-w-7xl mx-auto">
// //       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-center">
// //         {plans.map((plan, index) => (
// //           <div
// //             key={index}
// //             ref={sectionRefs[index]}
// //             className={`flex flex-col border-2 p-4 sm:p-6 rounded-lg transition-all duration-700 ease-in-out transform ${
// //               visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //             } ${
// //               plan.highlight
// //                 ? "border-transparent bg-white relative overflow-hidden shadow-xl"
// //                 : "hover:border-gray-300 hover:border-2 sm:hover:border-4"
// //             } hover:scale-105`}
// //             style={plan.highlight ? { borderImage: "linear-gradient(90deg, #ff8a00, #e52e71) 1" } : {}}
// //           >
//             // {plan.highlight && (
//               // <div className="relative">
//               //   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 p-[2px] sm:p-[3px]"></div>
//               //   <div className="relative w-full h-full bg-white rounded-lg p-1">
//               //     <div className="flex flex-col sm:flex-row items-start sm:items-center">
//               //       <div className="font-bold text-2xl sm:text-4xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
//               //         Pro
//               //       </div>
//               //       <span className="mt-1 sm:mt-0 sm:ml-2 px-2 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-medium text-sm sm:text-base">
//               //         Most Popular ✨
//               //       </span>
//               //     </div>
//               //     <div className="text-xs sm:text-sm pt-2 sm:pt-3 text-gray-500">{plan.description}</div>
//               //     <div className="pt-2 sm:pt-3 font-bold text-xl sm:text-2xl">
//               //       {plan.price}
//               //       <span className="font-normal text-sm sm:text-lg text-gray-400">/month</span>
//               //     </div>
//               //     <div className="pt-4 sm:pt-6">
//               //       <Button className="w-full p-2 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-purple-600 text-white transition-all duration-300">
//               //         Get started
//               //       </Button>
//               //     </div>
//               //     <div className="pt-4 sm:pt-6 space-y-2">
//               //       {plan.features.map((feature, i) => (
//               //         <div key={i} className="flex gap-2 items-start">
//               //           <Image 
//               //             src={checkMark} 
//               //             alt="check mark" 
//               //             className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
//               //           />
//               //           <span className="font-semibold text-xs sm:text-sm">{feature}</span>
//               //         </div>
//               //       ))}
//               //     </div>
//               //   </div>
//               // </div>
//             // )}

// //             {!plan.highlight && (
// //               <>
// //                 <div className="font-bold text-xl sm:text-2xl">{plan.name}</div>
// //                 <div className="text-xs sm:text-sm pt-2 sm:pt-3 text-gray-500">{plan.description}</div>
// //                 <div className="pt-2 sm:pt-3 font-bold text-xl sm:text-2xl">
// //                   {plan.price}
// //                   <span className="font-normal text-sm sm:text-lg text-gray-400">/month</span>
// //                 </div>
// //                 <div className="pt-4 sm:pt-6">
// //                   <Button className="w-full p-2 text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-purple-600 text-white transition-all duration-300">
// //                     Get started
// //                   </Button>
// //                 </div>
// //                 <div className="pt-4 sm:pt-6 space-y-2">
// //                   {plan.features.map((feature, i) => (
// //                     <div key={i} className="flex gap-2 items-start">
// //                       <Image 
// //                         src={checkMark} 
// //                         alt="check mark" 
// //                         className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
// //                       />
// //                       <span className="font-semibold text-xs sm:text-sm">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </div>
// //   );
// // };

// // export default MainIntro5;

"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import checkMark from "../../public/frame.svg";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";

const plans = [
  {
    name: "FREE",
    price: "$0",
    description: "Ideal for anyone interested in AI, this plan offers limited access to all core features.",
    features: ["Up to 60 pages", "Up to 10 answers"],
  },
  {
    name: "STUDENT",
    price: "$1.99",
    description: "Ideal for students, this plan offers extended access to core features.",
    features: [
      "Access to basic features",
      "Up to 200 free pages",
      "$0.02 per additional page",
      "Basic chat support",
    ],
  },
  {
    name: "PRO",
    price: "$9.99",
    description: "Ideal for professionals, this plan offers full access to premium features.",
    features: [
      "Access to basic features",
      "Up to 500 free pages",
      "$0.02 per additional page",
      "3 users included",
      "Premium chat support",
      "Uses GPT 4.0 model",
    ],
    highlight: true,
  },
  {
    name: "TEAM",
    price: "$49.99",
    description: "Ideal for teams, this plan offers advanced permissions and collaboration.",
    features: [
      "Access to basic features",
      "Up to 5000 free pages",
      "$0.01 per additional page",
      "10 users included",
      "Premium chat support",
      "Uses GPT 4.0 model",
      "Department & folder level permissions",
      "OCR images & scanned text",
      "Response personalization",
    ],
  },
];

const MainIntro5 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // Check screen size and update mobile state
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check on initial load
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobileView);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Variant for mobile and desktop animations
  const getVariants = (index: number) => {
    if (isMobile) {
      // Left to right animation for mobile
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            delay: index * 0.2,
            duration: 0.5
          }
        }
      };
    } else {
      // Vertical animation for desktop
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: index * 0.2,
            duration: 0.5
          }
        }
      };
    }
  };

  return (
    <div id="pricing" className="mt-8 tracking-normal px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={getVariants(index)}
            className={`
              flex flex-col border-2 p-6 rounded-lg transition-all duration-700 ease-in-out transform
              ${plan.highlight 
                ? "border-transparent bg-white relative overflow-hidden shadow-xl" 
                : "hover:border-gray-300 hover:border-4 hover:scale-105"
              }
            `}
          >
            {plan.highlight ? (
              <div className="relative">
                {/* Gradient Border Wrapper */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 p-[3px]"></div>

                {/* Inner White Card */}
                <div className="relative w-full h-full bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-3xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                      Pro
                    </div>
                    <span className="p-2 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-medium text-sm rounded-full">
                      Most Popular ✨
                    </span>
                  </div>
                  <div className="text-sm pt-3 text-gray-500 min-h-[50px]">
                    {plan.description}
                  </div>
                  <div className="pt-3 font-bold text-2xl">
                    {plan.price}
                    <span className="font-normal text-lg text-gray-400">/month</span>
                  </div>
                  <div className="pt-6">
                    <Button className="w-full p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white transform transition-all duration-300 hover:scale-105">
                      Get started
                    </Button>
                  </div>
                  <div className="pt-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <Image src={checkMark} alt="check mark" width={20} height={20} />
                        <span className="font-semibold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="font-bold text-2xl flex items-center">
                  {plan.name}
                </div>
                <div className="text-sm pt-3 text-gray-500 min-h-[50px]">
                  {plan.description}
                </div>
                <div className="pt-3 font-bold text-2xl">
                  {plan.price}
                  <span className="font-normal text-lg text-gray-400">/month</span>
                </div>
                <div className="pt-6">
                  <Button className="w-full p-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transform transition-all duration-300 hover:scale-105">
                    Get started
                  </Button>
                </div>
                <div className="pt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <Image src={checkMark} alt="check mark" width={20} height={20} />
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainIntro5;