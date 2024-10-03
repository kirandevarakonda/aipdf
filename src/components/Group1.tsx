import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Group1Type = {
  className?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const Group1: NextPage<Group1Type> = ({
  className = "",
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div
      className={`w-[210px] relative h-8 text-left text-xs text-white font-poppins ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-black" />
      <div className="absolute top-[21.88%] left-[17.62%]">
        Start a new chat
      </div>
      <img
        className="absolute h-[37.5%] w-[5.71%] top-[31.25%] right-[87.14%] bottom-[31.25%] left-[7.14%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
    </div>
  );
};

export default Group1;
