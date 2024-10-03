// import type { NextPage } from "next";
// import FileUpload from "@/components/FileUpload";

// export type GroupComponent16Type = {
//   className?: string;
// };

// const GroupComponent16: NextPage<GroupComponent16Type> = ({
//   className = "",
// }) => {
//   return (
//     <div
//       className={`absolute top-[90px] left-[0px] w-[1920px] h-[566px] text-left text-xl text-white font-inter ${className}`}
//     >
//       <div className="absolute top-[0px] left-[0px] [background:linear-gradient(-75.83deg,_rgba(3,_121,_255,_0.16),_rgba(219,_101,_158,_0.16)_52.5%,_rgba(255,_128,_95,_0.16))] w-[1920px] h-[566px]" />
//       <div className="absolute top-[167px] left-[315px] w-[630px] h-[232px]">
//         <div className="absolute top-[182px] left-[0px] w-[255px] h-[50px] text-center">
//           <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary w-[255px] h-[50px]" />
//           <div className="absolute top-[13px] left-[30px] font-semibold">
//             Get Started for free!
//           </div>
//         </div>
//         <b className="absolute top-[0px] left-[0px] text-33xl leading-[60px] inline-block w-[630px] text-black">
//           <span>{`Talk to `}</span>
//           <span className="text-primary">Your PDFs</span>
//         </b>
//         <div className="absolute top-[75px] left-[0px] text-lg leading-[28px] text-text-color inline-block w-[520px]">
//           <p className="m-0">
//             Do not read the long documents, our AI tool is at your help.
//             Summarise the PDF, YouTube video, blog or Podcast to extract
//             information easily.
//           </p>
//         </div>
//       </div>
//       <div className="absolute top-[100px] left-[1080px] w-[520px] h-[366px] text-center text-base text-black">
//         <img
//           className="absolute top-[0px] left-[0px] rounded-2xl w-[520px] h-[366px]"
//           alt=""
//           src="/rectangle-4.svg"
//         />
//         <div className="absolute top-[245px] left-[calc(50%_-_240px)] w-[480px] h-[26px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_62.4px)] leading-[26px] font-medium opacity-[0.5]">
//             Or Paste an URL
//           </div>
//           <div className="absolute top-[13px] left-[0px] w-[480px] h-0 opacity-[0.1]">
//             <div className="absolute top-[0px] left-[0px] border-black border-t-[1px] border-solid box-border w-[151px] h-px" />
//             <div className="absolute top-[0px] left-[330px] border-black border-t-[1px] border-solid box-border w-[151px] h-px" />
//           </div>
//         </div>
//         <div className="absolute top-[296px] left-[20px] w-[480px] h-[50px] text-text-color">
//           <img
//             className="absolute top-[0px] left-[0px] rounded-lg w-[402px] h-[50px]"
//             alt=""
//             src="/rectangle-6.svg"
//           />
//           <div className="absolute top-[15px] left-[15px] opacity-[0.5]">
//             https://youtu.be/abc?si=pqr
//           </div>
//           <div className="absolute top-[0px] left-[417px] w-[63px] h-[50px] text-xl text-white">
//             <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary w-[63px] h-[50px]" />
//             <div className="absolute top-[13px] left-[18px] font-semibold">
//               Go
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-[20px] left-[20px] w-[480px] h-[200px] text-left text-lg">
//           <button><img
//             className="absolute top-[0px] left-[0px] rounded-lg w-[480px] h-[200px]"
//             alt=""
//             src="/rectangle-5.svg"
//           /></button>
//           <div className="absolute top-[73px] left-[106px] w-[285.3px] h-[54px]">
//             <div className="absolute top-[0px] left-[96.3px]">
//               <p className="m-0 leading-[28px] font-semibold">
//                 Please Drop PDF Files
//               </p>
//               <p className="m-0 text-base leading-[26px]">or click to browse</p>
//             </div>
//             <img
//               className="absolute h-[89.44%] w-[26.99%] top-[5.56%] right-[73.01%] bottom-[5%] left-[0%] max-w-full overflow-hidden max-h-full"
//               alt=""
//               src="/vector.svg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupComponent16;
"use client"
import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';

export type GroupComponent16Type = {
  className?: string;
};

const GroupComponent16: NextPage<GroupComponent16Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/sign-in');
  };

  return (
    <div className={`relative w-full h-[566px] text-left text-xl text-white font-inter ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400 opacity-30" />
      <div className="relative flex items-center justify-between h-full max-w-[1200px] mx-auto px-6">
        {/* Left side: Text content */}
        <div className="flex flex-col max-w-[600px]">
          <h1 className="text-4xl font-bold text-black">
            Talk to <span className="text-primary text-purple">Your PDFs</span>
          </h1>
          <p className="mt-4 text-lg text-gray-900">
            Do not read the long documents, our AI tool is at your help. Summarize the PDF, YouTube video, blog, or Podcast to extract information easily.
          </p>
          <div className="mt-6">
            <button onClick={handleNavigation} className="bg-primary text-white rounded-lg px-4 py-2">
              Get Started for free!
            </button>
          </div>
        </div>
    
        {/* Right side: Image */}
        <div className="ml-12" onClick={handleNavigation} style={{ cursor: 'pointer' }}> {/* Added margin-left to create space */}
          <div className="relative w-[520px] h-[366px]">
            <img
              className="rounded-2xl w-full h-full"
              alt="Visual"
              src="/rectangle-4.svg"
            />
            <div className="absolute top-[245px] left-1/2 transform -translate-x-1/2 w-[480px] h-[26px]">
              <div className="leading-[26px] font-medium opacity-[0.8] text-gray-900 text-center">
                Or Paste an URL
              </div>
              <div className="mt-3 w-full h-0 opacity-[0.1]">
                <div className="border-black border-t-[1px] border-solid box-border w-[151px] inline-block" />
                <div className="border-black border-t-[1px] border-solid box-border w-[151px] inline-block float-right" />
              </div>
            </div>
            <div className="absolute top-[296px] left-1/2 transform -translate-x-1/2 w-[480px] h-[50px] text-text-color">
              <img
                className="absolute top-[0px] left-[0px] rounded-lg w-[402px] h-[50px]"
                alt="Input Background"
                src="/rectangle-6.svg"
              />
              <div className="absolute top-[15px] left-[15px] opacity-[0.5] text-gray-700">
                https://youtu.be/abc?si=pqr
              </div>
              <div className="absolute top-[0px] left-[417px] w-[63px] h-[50px] text-xl text-white">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary w-full h-full" />
                <div className="absolute top-[13px] left-[18px] font-semibold">
                  Go
                </div>
              </div>
            </div>
            <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[480px] h-[200px] text-left text-lg">
              <button onClick={handleNavigation}>
                <img
                  className="rounded-lg w-full h-full"
                  alt="Drop PDF"
                  src="/rectangle-5.svg"
                />
              </button>
              <div className="absolute top-[73px] left-[58%] transform -translate-x-1/2 w-[285.3px] h-[54px] text-center">
                <p className="leading-[28px] font-semibold text-gray-900">Please Drop PDF Files</p>
                <p className="text-base leading-[26px] text-gray-900">or click to browse</p>
                <img
                  className="absolute top-0 left-[-36px] w-[73px] h-[50px]"
                  alt="Icon"
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default GroupComponent16;
