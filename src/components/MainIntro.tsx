// // // "use client";

// // // import FileUpload from "./FileUpload";
// // // // import vector from "../public/vector.svg"
// // // // import Image from "next/image";
// // // // const MainIntro = () => {

// // // //   return (
// // // //     <>
// // // //       <div className=" flex bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center h-[566px]">
// // // //         <div>
// // // //         <div className="container mx-auto px-4">
// // // //           <div className="max-w-lg mx-auto p-8 bg-inherit">
// // // //             <h2 className="text-4xl font-bold mb-4">Talk to <span className="text-customPurple">Your PDFs</span></h2>
// // // //             <p className="text-gray-800 mb-6 font-normal text-lg">
// // // //               Do not read the long documents, our AI tool is at your help.
// // // //               Summarize the PDF, YouTube video, blog, or Podcast to extract
// // // //               information easily.
// // // //             </p>
// // // //             <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition">Get Started for free!</button>
// // // //           </div>
// // // //         </div>
// // // //         </div>
// // // //         <div>
// // // //         <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20">
// // // //         <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 ml-4 mr-4">
// // // //           <div>
// // // //             <Image src={vector} alt="pdf's image"></Image>
// // // //           </div>
// // // //           <div>
// // // //             <div className="text-xl font-semibold">Please Drop PDF Files</div>
// // // //             <div className="text-lg">or click to browse</div>
// // // //           </div>
// // // //         </div>
// // // //         <div>
// // // //             <div className="flex items-center">
// // // //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6"/>
// // // //               <span className="font-medium text-gray-500">Or Paste an URL</span>
// // // //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6"/>
// // // //             </div>
// // // //             <div className="flex items-center">
// // // //               <input type="text" placeholder="https://youtu.be/abc?si=pqr" className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2"/>
// // // //               <button className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition">Go</button>
// // // //             </div>
// // // //         </div>
// // // //       </div>
// // // //       </div>
// // // //     </div>
    
// // // //   </>
// // // //   );
// // // // };



// // // // export default MainIntro;


// // // import { useContext, useEffect, useState } from "react";
// // // import Image from "next/image";
// // // import vector from "../public/vector.svg";
// // // // import { LoginContext } from "@/app/page";
// // // // import SignupModal from "./SignUp";

// // // const MainIntro = () => {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   // const {userId,setUserId} = useContext(LoginContext);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

  

// // //   useEffect(() => {
// // //     setTimeout(() => setIsVisible(true), 200); // Small delay for smooth animation
// // //   }, []);

// // //   return (
// // //     <div className="flex bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center h-[566px] overflow-hidden pt-20">
// // //       {/* Left Content (Text Section) */}
// // //       <div
// // //         className={`transition-all duration-700 ease-in-out transform ${
// // //           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// // //         }`}
// // //       >
// // //         <div className="container px-4">
// // //           <div className="max-w-lg mx-auto p-8 bg-inherit">
// // //             <h2 className="text-4xl font-bold mb-4">
// // //               Talk to <span className="text-customPurple">Your PDFs</span>
// // //             </h2>
// // //             <p className="text-gray-800 mb-6 font-normal text-lg">
// // //               Do not read long documents, our AI tool is at your service.
// // //               Summarize PDFs, YouTube videos, blogs, or podcasts effortlessly.
// // //             </p>
// // //             <button className="px-5 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
// // //               Get Started for Free!
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Right Content (File Upload Box) */}
// // //       {/* <FileUpload isVisible={isVisible}/> */}
// // //       {userId !== null ? (
// // //   <FileUpload />
// // // ) : (
// // //   <>
// // //     {/* Modal should be placed separately to avoid re-opening issues */}
// // //     {/* {isModalOpen && <SignupModal onClose={() => setIsModalOpen(false)} />} */}

// // //     <div onClick={() => setIsModalOpen(true)}>
// // //       <div
// // //         className={`transition-all duration-700 ease-in-out transform ${
// // //           isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
// // //         }`}
// // //       >
// // //         <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
// // //           {/* Drag & Drop Box */}
// // //           <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 mx-4 hover:bg-gray-100 transition">
// // //             <Image
// // //               src={vector}
// // //               alt="pdf's image"
// // //               className="transition-transform transform hover:scale-110"
// // //             />
// // //             <div>
// // //               <div className="text-xl font-semibold">Please Drop PDF Files</div>
// // //               <div className="text-lg">or click to browse</div>
// // //             </div>
// // //           </div>

// // //           {/* URL Input Section */}
// // //           <div>
// // //             <div className="flex items-center">
// // //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
// // //               <span className="font-medium text-gray-500">Or Paste an URL</span>
// // //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
// // //             </div>
// // //             <div className="flex items-center">
// // //               <input
// // //                 type="text"
// // //                 placeholder="https://youtu.be/abc?si=pqr"
// // //                 className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none"
// // //               />
// // //               <div className="px-4 py-2 bg-customPurple text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform transform hover:scale-105">
// // //                 Go
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </>
// // // )}

// // //     </div>
    
// // //   );
// // // };

// // // export default MainIntro;


// // //new
// // "use client";

// // import Image from "next/image";
// // import FileUpload from "./FileUpload";
// // import vector from "../../public/vector.svg";
// // import { Button } from "./ui/button";
// // import Link from "next/link";
// // import { LogInIcon, ArrowRight } from "lucide-react";

// // const MainIntro = ({ isAuth }: { isAuth: boolean }) => {
// //   return (
// //     <div className="flex bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center h-[566px] overflow-hidden pt-2">
// //       {/* Left Content (Text Section) */}
// //       <div className="transition-all duration-700 ease-in-out transform opacity-100 translate-y-0">
// //         <div className="container px-4">
// //           <div className="max-w-lg mx-auto p-8 bg-inherit">
// //             <h2 className="text-4xl font-bold mb-4">
// //               Talk to <span className="text-customPurple">Your PDFs</span>
// //             </h2>
// //             <p className="text-gray-800 mb-6 font-normal text-lg">
// //               Do not read long documents, our AI tool is at your service.
// //               Summarize PDFs, YouTube videos, blogs, or podcasts effortlessly.
// //             </p>
// //             <Link href="sign-in">
// //             <Button className="px-5 py-2 text-white rounded-lg shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105">
// //               Get Started for Free!
// //             </Button>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right Content (File Upload or Login Prompt) */}
// //       {isAuth ? (
// //         <FileUpload />
// //       ) : (
// //         <div className="h-[366px] w-[520px] border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
// //           {/* Drag & Drop Box */}
// //           <Link href="/sign-in">
// //           <div className="flex items-center bg-white w-[480px] h-[200px] justify-center gap-4 border-2 border-dashed rounded-2xl mt-4 mx-4 hover:bg-gray-100 transition">
// //             <Image src={vector} alt="pdf's image" className="transition-transform transform hover:scale-110" />
// //             <div>
// //               <div className="text-xl font-semibold">Please Drop PDF Files</div>
// //               <div className="text-lg">or click to browse</div>
// //             </div>
// //           </div>
// //           </Link>

// //           {/* URL Input Section */}
// //           <div>
// //             <div className="flex items-center">
// //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
// //               <span className="font-medium text-gray-500">Or Paste an URL</span>
// //               <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-6" />
// //             </div>
// //             <div className="flex items-center">
// //               <input
// //                 type="text"
// //                 placeholder="https://youtu.be/abc?si=pqr"
// //                 className="border-2 border-solid border-gray-400 rounded-md mx-6 w-[75%] py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none"
// //               />
// //               <Link href="sign-in">
// //               <Button className="px-4 py-2 text-white rounded-lg shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105">
// //                 Go
// //               </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       {/* <div className="flex mt-2">
// //             {isAuth && firstChat && (
// //               <>
// //                 <Link href={`/chat/${firstChat.id}`}>
// //                   <Button>
// //                     Go to Chats <ArrowRight className="ml-2" />
// //                   </Button>
// //                 </Link>
// //               </>
// //             )}
// //             </div> */}
// //     </div>
// //   );
// // };

// // export default MainIntro;


// // components/MainIntro.tsx
// "use client";

// import Image from "next/image";
// import FileUpload from "./FileUpload";
// import vector from "../../public/vector.svg";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import { LogInIcon, ArrowRight } from "lucide-react";

// const MainIntro = ({ isAuth }: { isAuth: boolean }) => {
//   return (
//     <div className="flex flex-col md:flex-row bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center min-h-[576px] overflow-hidden pt-20 md:pt-2 px-4">
//       {/* Left Content (Text Section) */}
//       <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
//         <div className="max-w-lg mx-auto p-4 md:p-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Talk to <span className="text-customPurple">Your PDFs</span>
//           </h2>
//           <p className="text-gray-800 mb-6 font-normal text-base md:text-lg">
//             Do not read long documents, our AI tool is at your service.
//             Summarize PDFs, YouTube videos, blogs, or podcasts effortlessly.
//           </p>
//           <Link href="sign-in">
//             <Button className="px-5 py-2 text-white rounded-lg shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105">
//               Get Started for Free!
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Right Content (File Upload or Login Prompt) */}
//       <div className="w-full md:w-1/2 max-w-[520px] pb-8">
//         {isAuth ? (
//           <FileUpload />
//         ) : (
//           <div className="h-auto md:h-[366px] w-full border-4 border-inherit rounded-2xl bg-white bg-opacity-50 bg-inherit hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
//             {/* Drag & Drop Box */}
//             <Link href="/sign-in">
//               <div className="flex flex-col items-center justify-center bg-white w-full h-[200px] gap-4 border-2 border-dashed rounded-2xl mt-4 mx-auto md:w-[480px] hover:bg-gray-100 transition">
//                 <Image 
//                   src={vector} 
//                   alt="pdf's image" 
//                   className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:scale-110" 
//                 />
//                 <div className="text-center">
//                   <div className="text-lg md:text-xl font-semibold">Please Drop PDF Files</div>
//                   <div className="text-sm md:text-lg">or click to browse</div>
//                 </div>
//               </div>
//             </Link>

//             {/* URL Input Section */}
//             <div className="p-4">
//               <div className="flex items-center">
//                 <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-2 md:mx-6" />
//                 <span className="font-medium text-gray-500 text-sm md:text-base">Or Paste an URL</span>
//                 <hr className="border-t-1 border-gray-300 w-[28%] my-8 mx-2 md:mx-6" />
//               </div>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   placeholder="https://youtu.be/abc?si=pqr"
//                   className="border-2 border-solid border-gray-400 rounded-md w-full py-2 px-2 transition-transform transform focus:scale-105 focus:outline-none text-sm md:text-base"
//                 />
//                 <Link href="sign-in">
//                   <Button className="px-4 py-2 text-white rounded-lg shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105">
//                     Go
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainIntro;

"use client";

import Image from "next/image";
import FileUpload from "./FileUpload";
import vector from "../../public/vector.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const MainIntro = () => {
  const { user, isLoaded } = useUser();
  const [chatCount, setChatCount] = useState<number | null>(null);

  useEffect(() => {
    if (user?.id) {
      const fetchChatCount = async () => {
        try {
          const response = await axios.get(`/api/chat-count?userId=${user.id}`);
          setChatCount(response.data.count);
        } catch (error) {
          console.error("Error fetching chat count:", error);
        }
      };

      fetchChatCount();
    }
  }, [user?.id]);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-purple-100 to-pink-100 justify-around items-center min-h-[576px] overflow-hidden pt-20 md:pt-2 px-4">
      {/* Left Content (Text Section) */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <div className="max-w-lg mx-auto p-4 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Talk to <span className="text-customPurple">Your PDFs</span>
          </h2>
          <p className="text-gray-800 mb-6 font-normal text-base md:text-lg">
            Do not read long documents, our AI tool is at your service.
            Summarize PDFs, YouTube videos, blogs, or podcasts effortlessly.
          </p>
          <Link href="/sign-in">
            <Button className="px-5 py-2 text-white rounded-lg shadow-md hover:bg-violet-700 transition-transform transform hover:scale-105">
              Get Started for Free!
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Content (File Upload or Login Prompt) */}
      <div className="w-full md:w-1/2 max-w-[520px] pb-8">
        {user?.id ? (
          chatCount !== null && chatCount >= 3 ? (
            <div className="h-auto md:h-[366px] w-full border-4 border-red-500 rounded-2xl bg-white bg-opacity-50 p-6 text-center text-red-600 font-bold">
              You have exceeded your limit. <br />
              Please upgrade if you want to continue.
            </div>
          ) : (
            <FileUpload userId={user.id} />
          )
        ) : (
          <div className="h-auto md:h-[366px] w-full border-4 border-inherit rounded-2xl bg-white bg-opacity-50 hover:border-customPurple hover:border-opacity-20 transition-transform transform hover:scale-105">
            <Link href="/sign-in">
              <div className="flex flex-col items-center justify-center bg-white w-full h-[200px] gap-4 border-2 border-dashed rounded-2xl mt-4 mx-auto md:w-[480px] hover:bg-gray-100 transition">
                <Image
                  src={vector}
                  alt="pdf's image"
                  className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:scale-110"
                />
                <div className="text-center">
                  <div className="text-lg md:text-xl font-semibold">Please Drop PDF Files</div>
                  <div className="text-sm md:text-lg">or click to browse</div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainIntro;
