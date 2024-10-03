// import type { NextPage } from "next";

// export type GroupComponent17Type = {
//   className?: string;
// };

// const GroupComponent17: NextPage<GroupComponent17Type> = ({
//   className = "",
// }) => {
//   return (
//     <div
//       className={`absolute top-[161px] left-[660px] w-[300px] h-[484px] text-left text-base text-text-color font-inter ${className}`}
//     >
//       <img
//         className="absolute top-[0px] left-[0px] rounded-xl w-[300px] h-[484px]"
//         alt=""
//         src="/rectangle-41.svg"
//       />
//       <div className="absolute top-[3px] left-[3px] rounded-4xs bg-white w-[294px] h-[478px]" />
//       <div className="absolute top-[310px] left-[calc(50%_-_130px)] w-[254px] h-[27.9px] text-gray-100">
//         <div className="absolute top-[2px] left-[calc(50%_-_91px)] leading-[24px] font-semibold inline-block w-[218px] h-[23.9px]">
//           Access to advanced models
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[347.8px] left-[calc(50%_-_130px)] w-[222px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_75px)] leading-[24px] inline-block w-[186px] h-[23.9px]">
//           Access to basic features
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[385.7px] left-[calc(50%_-_130px)] w-[153px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_40.5px)] leading-[24px] inline-block w-[117px] h-[23.9px]">
//           Up to 60 pages
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[423.5px] left-[calc(50%_-_130px)] w-[167px] h-[27.9px]">
//         <div className="absolute top-[2px] left-[calc(50%_-_47.5px)] leading-[24px] inline-block w-[131px] h-[23.9px]">
//           Up to 10 answers
//         </div>
//         <img
//           className="absolute top-[0px] left-[0px] w-7 h-[27.9px] overflow-hidden"
//           alt=""
//           src="/frame.svg"
//         />
//       </div>
//       <div className="absolute top-[235px] left-[20px] w-[260px] h-[44.8px] text-center text-white">
//         <div className="absolute top-[0px] left-[0px] rounded-lg bg-primary w-[260px] h-[44.8px]" />
//         <div className="absolute top-[13px] left-[39px] font-semibold flex items-center justify-center w-[181.8px] h-[18.9px]">
//           Get started
//         </div>
//       </div>
//       <div className="absolute top-[162.3px] left-[20px] text-13xl text-black">
//         <span className="leading-[32px] uppercase font-semibold">$6.99</span>
//         <span className="text-xl leading-[20px] text-gray-300">/month</span>
//       </div>
//       <div className="absolute top-[71.7px] left-[calc(50%_-_130px)] text-sm leading-[24px] inline-block w-[260px] h-[71.7px]">
//         Ideal for anyone interested in AI, this plan offers limited access to
//         all core features.
//       </div>
//       <b className="absolute top-[22px] left-[20px] text-13xl leading-[34px] uppercase text-transparent !bg-clip-text [background:linear-gradient(-63.46deg,_#0379ff,_#b74bdd_50%,_#ff805f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
//         Pro
//       </b>
//       <div className="absolute top-[25px] left-[102px] w-[125px] h-7 text-sm">
//         <img
//           className="absolute top-[0px] left-[0px] rounded-xl w-[125px] h-7"
//           alt=""
//           src="/rectangle-9.svg"
//         />
//         <div className="absolute top-[7px] left-[10px] w-[105.1px] h-3.5">
//           <div className="absolute top-[0px] left-[0px] leading-[14px] font-medium text-transparent !bg-clip-text [background:linear-gradient(-63.46deg,_#0379ff,_#b74bdd_50%,_#ff805f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
//             Most Popular
//           </div>
//           <img
//             className="absolute top-[1px] left-[94px] w-[11.1px] h-3 overflow-hidden"
//             alt=""
//             src="/frame1.svg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupComponent17;

import type { NextPage } from "next";

export type GroupComponent17Type = {
  className?: string;
};

const GroupComponent17: NextPage<GroupComponent17Type> = ({
  className = "",
}) => {
  return (
    <div className={`relative w-full text-left text-base text-text-color font-inter ${className}`}>
      <img
        className="absolute top-0 left-0 rounded-xl w-full h-full"
        alt=""
        src="/rectangle-41.svg"
      />
      <div className="text-center mt-6">
          <button className="bg-primary text-white rounded-lg px-4 py-2">Get started</button>
        </div>
        <div className="mt-4 text-2xl font-bold">
          $6.99<span className="text-xl text-gray-300">/month</span>
        </div>
      <div className="absolute inset-3 rounded-4xs bg-white p-4 h-full flex flex-col justify-between">
        <div>
          <div className="font-semibold">Access to advanced models</div>
          <img
            className="mt-2 w-7 h-[27.9px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="mt-4">
          <div className="font-semibold">Access to basic features</div>
          <img
            className="mt-2 w-7 h-[27.9px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="mt-4">
          <div className="font-semibold">Up to 60 pages</div>
          <img
            className="mt-2 w-7 h-[27.9px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="mt-4">
          <div className="font-semibold">Up to 10 answers</div>
          <img
            className="mt-2 w-7 h-[27.9px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent17;


{/* <div
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
    </div> */}

