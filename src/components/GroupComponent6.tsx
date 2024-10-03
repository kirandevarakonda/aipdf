// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type GroupComponent6Type = {
//   className?: string;
//   waysToUseOur?: string;
//   aIPDFSummarizer?: string;
//   noTimeToReadPagePDFsLetO?: string;
//   showGroupDiv?: boolean;

//   /** Style props */
//   propHeight?: CSSProperties["height"];
//   groupDivTop?: CSSProperties["top"];
// };

// const GroupComponent6: NextPage<GroupComponent6Type> = ({
//   className = "",
//   propHeight,
//   waysToUseOur,
//   aIPDFSummarizer,
//   noTimeToReadPagePDFsLetO,
//   showGroupDiv,
//   groupDivTop,
// }) => {
//   const groupDiv7Style: CSSProperties = useMemo(() => {
//     return {
//       height: propHeight,
//       top: groupDivTop,
//     };
//   }, [propHeight, groupDivTop]);

//   return (
//     showGroupDiv && (
//       <div
//         className={`absolute top-[0px] left-[calc(50%_-_420px)] w-[845px] h-[232px] text-center text-xl text-primary font-inter ${className}`}
//         style={groupDiv7Style}
//       >
//         <div className="absolute top-[0px] left-[calc(50%_-_114.5px)] font-medium">
//           ✨ AI PDF SUMMARIZER
//         </div>
//         <b className="absolute top-[34px] left-[0px] text-23xl leading-[52px] flex items-center w-[845px] text-black">
//           <span className="w-full">
//             <p className="m-0">{waysToUseOur}</p>
//             <p className="m-0 text-primary">{aIPDFSummarizer}</p>
//           </span>
//         </b>
//         <div className="absolute top-[148px] left-[calc(50%_-_422.5px)] text-lg leading-[28px] text-text-color flex items-center w-[845px]">
//           <span className="w-full">
//             <p className="m-0">{noTimeToReadPagePDFsLetO}</p>
//           </span>
//         </div>
//       </div>
//     )
//   );
// };

// export default GroupComponent6;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent6Type = {
  className?: string;
  waysToUseOur?: string;
  aIPDFSummarizer?: string;
  noTimeToReadPagePDFsLetO?: string;
  showGroupDiv?: boolean;
  propHeight?: CSSProperties["height"];
};

const GroupComponent6: NextPage<GroupComponent6Type> = ({
  className = "",
  propHeight,
  waysToUseOur,
  aIPDFSummarizer,
  noTimeToReadPagePDFsLetO,
  showGroupDiv,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => ({
    height: propHeight,
  }), [propHeight]);

  return (
    showGroupDiv && (
      <div className={`w-full max-w-[845px] text-center text-xl text-primary font-inter ${className}`} style={groupDivStyle}>
        <h2 className="font-medium text-purple">✨ AI PDF SUMMARIZER</h2>
        <h3 className="text-2xl font-bold mt-2">
          {waysToUseOur}<br />
          <span className="text-primary text-purple">{aIPDFSummarizer}</span>
        </h3>
        <p className="mt-2 text-lg text-gray-700">{noTimeToReadPagePDFsLetO}</p>
      </div>
    )
  );
};

export default GroupComponent6;
