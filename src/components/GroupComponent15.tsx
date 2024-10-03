// import type { NextPage } from "next";
// import GroupComponent7 from "./GroupComponent7";

// export type GroupComponent15Type = {
//   className?: string;
// };

// const GroupComponent15: NextPage<GroupComponent15Type> = ({
//   className = "",
// }) => {
//   return (
//     <div
//       className={`absolute top-[0px] left-[0px] w-[1290px] h-[1487px] text-left text-xl text-text-color font-inter ${className}`}
//     >
//       <div className="absolute top-[119px] left-[35px] border-lavender border-r-[2px] border-solid box-border w-0.5 h-[1001px]" />
//       <div className="absolute top-[0px] left-[calc(50%_-_645px)] w-[1290px] h-[419px]">
//         <div className="absolute top-[50px] left-[calc(50%_-_645px)] w-[630px] h-[78px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_215px)] w-[530px] h-[78px]">
//             <div className="absolute top-[48px] left-[calc(50%_-_265px)] leading-[30px] font-medium inline-block w-[530px]">
//               Upload PDFs effortlessly.
//             </div>
//             <div className="absolute top-[0px] left-[0px] text-9xl leading-[38px] font-semibold text-black">
//               Upload Documents
//             </div>
//           </div>
//           <div className="absolute top-[0px] left-[0px] w-[70px] h-[70px] text-17xl text-primary">
//             <img
//               className="absolute top-[0px] left-[0px] w-[70px] h-[70px]"
//               alt=""
//               src="/ellipse-1.svg"
//             />
//             <div className="absolute top-[17px] left-[26px] leading-[36px] font-semibold">
//               1
//             </div>
//           </div>
//         </div>
//         <img
//           className="absolute top-[0px] left-[660px] rounded-xl w-[630px] h-[419px] object-cover"
//           alt=""
//           src="/image-1@2x.png"
//         />
//       </div>
//       <GroupComponent7
//         askQuestionsExtractDetails="Ask questions, extract details, and get summaries instantly."
//         instantAnswers="Instant Answers"
//         prop="2"
//         image2="/image-2@2x.png"
//       />
//       <GroupComponent7
//         propTop="1067px"
//         askQuestionsExtractDetails="Responses are backed by references from your uploaded PDF."
//         instantAnswers="Verified Sources"
//         prop="3"
//         image2="/image-3@2x.png"
//       />
//     </div>
//   );
// };

// export default GroupComponent15;

import type { NextPage } from "next";
import GroupComponent7 from "./GroupComponent7";

export type GroupComponent15Props = {
  className?: string;
};

const GroupComponent15: NextPage<GroupComponent15Props> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-full max-w-7xl px-4 md:px-8 lg:px-16 space-y-16 ${className}`}
    >
      {/* Container for Steps */}
      <div className="relative flex flex-col items-center w-full">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full z-0"></div>

        {/* Section 1: Upload Documents */}
        <GroupComponent7
          title="Upload Documents"
          description="Upload PDFs effortlessly."
          stepNumber="1"
          imageSrc="/image-1@2x.png"
        />

        {/* Section 2: Instant Answers */}
        <GroupComponent7
          title="Instant Answers"
          description="Ask questions, extract details, and get summaries instantly."
          stepNumber="2"
          imageSrc="/image-2@2x.png"
        />

        {/* Section 3: Verified Sources */}
        <GroupComponent7
          title="Verified Sources"
          description="Responses are backed by references from your uploaded PDF."
          stepNumber="3"
          imageSrc="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponent15;




