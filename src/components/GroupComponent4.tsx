import type { NextPage } from "next";

export type GroupComponent4Type = {
  className?: string;
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[161px] left-[494px] w-[250px] h-[760px] text-left text-13xl text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none border-gainsboro-200 border-[1px] border-solid box-border w-[250px] h-[760px]" />
      <div className="absolute top-[232px] left-[20px] w-[210px] h-[44.8px] text-center text-base">
        <div className="absolute top-[0px] left-[0px] rounded-lg border-silver border-[1px] border-solid box-border w-[210px] h-[44.8px]" />
        <div className="absolute top-[13px] left-[31.5px] font-semibold flex items-center justify-center w-[146.8px] h-[18.9px]">
          Get started
        </div>
      </div>
      <div className="absolute top-[159.3px] left-[20px]">
        <span className="leading-[32px] uppercase font-semibold">$0.99</span>
        <span className="text-xl leading-[20px] text-gray-300">/month</span>
      </div>
      <div className="absolute top-[68.7px] left-[calc(50%_-_105px)] text-sm leading-[24px] text-text-color inline-block w-[210px] h-[71.7px]">
        Ideal for anyone interested in AI, this plan offers limited access to
        all core features.
      </div>
      <b className="absolute top-[18.9px] left-[20px] leading-[34px] uppercase">
        Student
      </b>
    </div>
  );
};

export default GroupComponent4;
