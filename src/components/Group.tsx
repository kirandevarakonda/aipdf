import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupType = {
  className?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const Group: NextPage<GroupType> = ({
  className = "",
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div
      className={`w-[210px] relative h-8 text-left text-xs text-black font-poppins ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-lg w-[210px] h-8"
        alt=""
        src="/rectangle-1.svg"
      />
      <div className="absolute h-[56.25%] w-[85.71%] top-[21.88%] right-[7.14%] bottom-[21.88%] left-[7.14%]">
        <div className="absolute w-full top-[0%] left-[0%] inline-block">
          Lorem Ipsum is dummy text....
        </div>
      </div>
    </div>
  );
};

export default Group;
