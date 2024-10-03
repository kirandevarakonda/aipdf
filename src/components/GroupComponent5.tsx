import type { NextPage } from "next";

export type GroupComponent5Type = {
  className?: string;
};

const GroupComponent5: NextPage<GroupComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[468px] left-[0px] w-[1240px] h-[453px] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-xl border-gainsboro-200 border-[1px] border-solid box-border w-[1240px] h-[453px]" />
      <div className="absolute top-[65px] left-[1px] bg-whitesmoke-100 w-[1238px] h-16" />
      <div className="absolute top-[193px] left-[1px] bg-whitesmoke-100 w-[1238px] h-16" />
      <div className="absolute top-[321px] left-[1px] bg-whitesmoke-100 w-[1238px] h-16" />
    </div>
  );
};

export default GroupComponent5;
