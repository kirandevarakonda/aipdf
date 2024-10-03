// import type { NextPage } from "next";

// export type GroupComponent8Type = {
//   className?: string;
// };

// const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[0px] left-[calc(50%_-_422.5px)] w-[845px] h-[180px] text-center text-xl text-primary font-inter ${className}`}
//     >
//       <div className="absolute top-[0px] left-[calc(50%_-_175.5px)] uppercase font-medium">
//         ✨ Frequently Asked Questions
//       </div>
//       <b className="absolute top-[34px] left-[0px] text-23xl leading-[52px] flex items-center w-[845px] text-black">
//         <span className="w-full">
//           <span>{`Questions? `}</span>
//           <span className="text-primary">Answers.</span>
//         </span>
//       </b>
//       <div className="absolute top-[96px] left-[calc(50%_-_422.5px)] text-lg leading-[28px] text-text-color flex items-center w-[845px]">
//         <span className="w-full">
//           <p className="m-0">
//             No time to read 50-page PDFs? Let our AI do it for you. Our smart AI
//             reads the details so you don't have to. Summarize any PDF in seconds
//             and get the key points fast.
//           </p>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default GroupComponent8;

import type { NextPage } from "next";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-[845px] text-center text-xl text-primary font-inter ${className}`}>
      <h2 className="uppercase font-medium">✨ Frequently Asked Questions</h2>
      <b className="text-2xl leading-[52px] text-black">
        <span>Questions? <span className="text-primary">Answers.</span></span>
      </b>
      <p className="text-lg leading-[28px] text-text-color">No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.</p>
    </div>
  );
};

export default GroupComponent8;