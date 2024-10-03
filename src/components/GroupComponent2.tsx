import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent2Type = {
  className?: string;
  free?: string;
  prop?: string;
  planEmptyItems?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  prop5?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propTextAlign?: CSSProperties["textAlign"];
  propMinWidth3?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propMinWidth4?: CSSProperties["minWidth"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propMinWidth5?: CSSProperties["minWidth"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propMinWidth6?: CSSProperties["minWidth"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propMinWidth7?: CSSProperties["minWidth"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propMinWidth8?: CSSProperties["minWidth"];
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  propMinWidth,
  free,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
  prop,
  propAlignSelf,
  planEmptyItems,
  propTextAlign,
  propMinWidth3,
  propAlignSelf1,
  prop1,
  propMinWidth4,
  propAlignSelf2,
  prop2,
  propMinWidth5,
  propAlignSelf3,
  prop3,
  propMinWidth6,
  propAlignSelf4,
  prop4,
  propMinWidth7,
  propAlignSelf5,
  prop5,
  propMinWidth8,
}) => {
  const groupDiv6Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const freeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const monthStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  return (
    <div
      className={`absolute top-[10.063rem] left-[15.313rem] w-[15.625rem] h-[47.5rem] text-left text-[2rem] text-black font-inter ${className}`}
      style={groupDiv6Style}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-t-xl rounded-b-none border-gainsboro-200 border-[1px] border-solid box-border w-[15.625rem] h-[47.5rem]" />
      <div className="absolute top-[14.438rem] left-[1.25rem] w-[13.125rem] h-[2.8rem] text-center text-[1rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg border-silver border-[1px] border-solid box-border w-[13.125rem] h-[2.8rem]" />
        <div className="absolute top-[0.813rem] left-[1.969rem] font-semibold flex items-center justify-center w-[9.175rem] h-[1.181rem]">
          Get started
        </div>
      </div>
      <div
        className="absolute top-[9.956rem] left-[1.25rem] flex items-end w-[6.875rem] h-[1.994rem]"
        style={monthStyle}
      >
        <span className="[line-break:anywhere] w-full">
          <span className="leading-[2rem] uppercase font-semibold">{prop}</span>
          <span className="text-[1.25rem] leading-[1.25rem] text-gray-300">
            /month
          </span>
        </span>
      </div>
      <div className="absolute top-[4.231rem] left-[calc(50%_-_105px)] text-[0.875rem] leading-[1.5rem] text-text-color inline-block w-[13.125rem] h-[4.481rem]">
        Ideal for anyone interested in AI, this plan offers limited access to
        all core features.
      </div>
      <b
        className="absolute top-[1.181rem] left-[1.25rem] leading-[2.125rem] uppercase flex items-center w-[4.938rem] h-[2.119rem]"
        style={freeStyle}
      >
        {free}
      </b>
    </div>
  );
};

export default GroupComponent2;
