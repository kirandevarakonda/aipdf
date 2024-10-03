// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type GroupComponent10Type = {
//   className?: string;
//   prop?: string;
//   student?: string;

//   /** Style props */
//   propLeft?: CSSProperties["left"];
// };

// const GroupComponent10: NextPage<GroupComponent10Type> = ({
//   className = "",
//   propLeft,
//   prop,
//   student,
// }) => {
//   const groupDiv3Style: CSSProperties = useMemo(() => {
//     return {
//       left: propLeft,
//     };
//   }, [propLeft]);

//   return (
//     <div
//       className={`absolute top-[164px] left-[330px] w-[300px] h-[478px] text-left text-base text-text-color font-inter ${className}`}
//       style={groupDiv3Style}
//     >
//       <div className="absolute top-[0px] left-[0px] rounded-xl border-gainsboro-200 border-[1px] border-solid box-border w-[300px] h-[478px]" />
//       <div className="absolute top-[307px] left-[calc(50%_-_130px)] w-[254px] h-[27.9px] text-gray-100">
//         <div className="absolute top-[2px] left-[calc(50%_-_91px)] leading-[24px] font-semibold inline-block w-[218px] h-[23.9px]">
//           Access to advanced models
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[344.8px] left-[calc(50%_-_130px)] w-[222px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_75px)] leading-[24px] inline-block w-[186px] h-[23.9px]">
//           Access to basic features
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[382.7px] left-[calc(50%_-_130px)] w-[153px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_40.5px)] leading-[24px] inline-block w-[117px] h-[23.9px]">
//           Up to 60 pages
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[420.5px] left-[calc(50%_-_130px)] w-[167px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_47.5px)] leading-[24px] inline-block w-[131px] h-[23.9px]">
//           Up to 10 answers
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[232px] left-[20px] w-[260px] h-[44.8px] text-center text-black">
//         <div className="absolute top-[0px] left-[0px] rounded-lg border-silver border-[1px] border-solid box-border w-[260px] h-[44.8px]" />
//         <div className="absolute top-[13px] left-[39px] font-semibold flex items-center justify-center w-[181.8px] h-[18.9px]">
//           Get started
//         </div>
//       </div>
//       <div className="absolute top-[159.3px] left-[20px] text-13xl text-black">
//         <span className="leading-[32px] uppercase font-semibold">{prop}</span>
//         <span className="text-xl leading-[20px] text-gray-300">/month</span>
//       </div>
//       <div className="absolute top-[68.7px] left-[calc(50%_-_130px)] text-sm leading-[24px] inline-block w-[260px] h-[71.7px]">
//         Ideal for anyone interested in AI, this plan offers limited access to
//         all core features.
//       </div>
//       <b className="absolute top-[18.9px] left-[20px] text-13xl leading-[34px] uppercase text-black">
//         {student}
//       </b>
//     </div>
//   );
// };

// export default GroupComponent10;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent10Type = {
  className?: string;
  prop?: string;
  student?: string;
  propLeft?: CSSProperties["left"];
};

const GroupComponent10: NextPage<GroupComponent10Type> = ({
  className = "",
  propLeft,
  prop,
  student,
}) => {
  const groupDivStyle: CSSProperties = useMemo(
    () => ({
      left: propLeft,
    }),
    [propLeft]
  );

  return (
    <div
      className={`relative w-full text-left text-base text-text-color font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className="border rounded-xl border-gainsboro-200 p-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold">{student}</h3>
          <p className="mt-2">
            Ideal for anyone interested in AI, this plan offers limited access to
            all core features.
          </p>
          <div className="text-center mt-4">
            <span className="text-2xl font-bold">{prop}</span>
            <span className="text-lg text-gray-300">/month</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-gray-200 rounded-lg px-4 py-2">
            Get started
          </button>
        </div>
        <div className="mt-6">
          <div className="font-semibold">Access to advanced models</div>
          <div className="mt-2 font-semibold">Access to basic features</div>
          <div className="mt-2 font-semibold">Up to 60 pages</div>
          <div className="mt-2 font-semibold">Up to 10 answers</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent10;



