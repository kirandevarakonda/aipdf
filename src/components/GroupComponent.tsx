// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type GroupComponentType = {
//   className?: string;
//   deeeFrame?: string;

//   /** Style props */
//   groupDivLeft?: CSSProperties["left"];
//   groupDivTop?: CSSProperties["top"];
// };

// const GroupComponent: NextPage<GroupComponentType> = ({
//   className = "",
//   deeeFrame,
//   groupDivLeft,
//   groupDivTop,
// }) => {
//   const groupDiv4Style: CSSProperties = useMemo(() => {
//     return {
//       left: groupDivLeft,
//       top: groupDivTop,
//     };
//   }, [groupDivLeft, groupDivTop]);

//   return (
//     <div
//       className={`absolute top-[0px] left-[0px] w-[410px] h-[298px] text-left text-base text-text-color font-inter ${className}`}
//       style={groupDiv4Style}
//     >
//       <div className="absolute top-[0px] left-[0px] rounded-3xl border-gainsboro-200 border-[1px] border-solid box-border w-[410px] h-[298px]" />
//       <div className="absolute top-[114px] left-[calc(50%_-_175px)] leading-[26px] font-medium inline-block w-[350px]">
//         <p className="m-0">
//           AI PDF Chat helps me a lot with my school projects requiring me to
//           write long essays. In such a short time, I could create long-form
//           essay bodies from my bullet point ideas. Truly a life-saver for my
//           studies. I also benefited from the Student Program.
//         </p>
//       </div>
//       <img
//         className="absolute top-[30px] left-[30px] w-16 h-16 object-cover"
//         alt=""
//         src="/mask-group@2x.png"
//       />
//       <div className="absolute top-[36px] left-[109px] w-[271px] h-[52px] text-right text-sm text-black">
//         <div className="absolute top-[0px] left-[0px] w-[271px] h-[52px]">
//           <div className="absolute top-[28px] left-[189px] leading-[24px] font-medium opacity-[0.3]">
//             05/08/2024
//           </div>
//           <div className="absolute top-[0px] left-[0px] w-[114px] h-[52px] text-left text-xl">
//             <img
//               className="absolute top-[30px] left-[0px] w-[114px] h-[22px] object-cover"
//               alt=""
//               src={deeeFrame}
//             />
//             <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium">
//               Gul D.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupComponent;


import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  deeeFrame?: string;
  avatar?: string; // New prop for the avatar image
  groupDivLeft?: CSSProperties["left"];
  groupDivTop?: CSSProperties["top"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  deeeFrame,
  avatar = "/mask-group@2x.png", // Default avatar image
  groupDivLeft,
  groupDivTop,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => ({
    left: groupDivLeft,
    top: groupDivTop,
  }), [groupDivLeft, groupDivTop]);

  return (
    <div className={`w-[410px] h-[298px] text-left text-base text-text-color font-inter ${className}`} style={groupDivStyle}>
      <div className="border rounded-3xl border-gainsboro-200 p-3">
        <div className="flex items-center space-x-4">
          <img className="w-12 h-12 object-cover rounded-full" alt="avatar" src={avatar} />
          <div className="flex-1 font-semibold">Gul D</div>
          <img className="w-90 h-4 object-cover" alt="stars" src={deeeFrame} />
        </div>
        <p className="mt-2 leading-[26px] font-medium">
          AI PDF Chat helps me a lot with my school projects requiring me to write long essays. In such a short time, I could create long-form essay bodies from my bullet point ideas. Truly a life-saver for my studies.
        </p>
      </div>
    </div>
  );
};

export default GroupComponent;
