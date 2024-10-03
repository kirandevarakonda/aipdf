import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  className?: string;
  /** Style props */
  groupDivTop?: CSSProperties["top"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  groupDivTop,
}) => {
  const groupDiv5Style: CSSProperties = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  return (
    <div
      className={`w-[1000] h-[72px] gap-6 text-left text-3xl text-black font-inter ${className}`}
      style={groupDiv5Style}
    >
      <div className="rounded-2xl border-gainsboro-200 border-[1px] border-solid box-border w-full h-full" />
      <img
        className="rounded-md w-6 h-6 overflow-hidden absolute right-4 top-4"
        alt="+"
        src="/frame3.svg"
      />
      <div className="leading-[32px] font-medium pl-4 pt-4">
        Wait, how are you different from the competition?
      </div>
    </div>
  );
};

export default GroupComponent1;

// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type GroupComponent1Type = {
//   className?: string;
//   groupDivTop?: CSSProperties["top"];
// };

// const GroupComponent1: NextPage<GroupComponent1Type> = ({
//   className = "",
//   groupDivTop,
// }) => {
//   const groupDivStyle: CSSProperties = useMemo(() => ({
//     top: groupDivTop,
//   }), [groupDivTop]);

//   return (
//     <div className={`w-full h-[72px] text-left text-2xl text-black font-inter ${className}`} style={groupDivStyle}>
//       <div className="border rounded-2xl border-gainsboro-200 p- ">
//         <div className="font-medium">Wait, how are you different from the competition?</div>
//       </div>
//     </div>
//   );
// };

// export default GroupComponent1;