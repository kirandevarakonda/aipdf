import type { NextPage } from "next";

export type GroupComponent11Type = {
  className?: string;
};

const GroupComponent11: NextPage<GroupComponent11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1290px] h-[141px] text-left text-3xl text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl border-gainsboro-200 border-[1px] border-solid box-border w-[1290px] h-[137px]" />
      <img
        className="absolute top-[24px] left-[1236px] rounded-md w-6 h-6 overflow-hidden"
        alt=""
        src="/frame2.svg"
      />
      <div className="absolute top-[20px] left-[30px] leading-[32px] font-medium">
        Wait, how are you different from the competition?
      </div>
      <div className="absolute top-[63px] left-[30px] text-base leading-[26px] text-text-color flex items-center w-[1230px]">
        <span className="w-full">
          <p className="m-0">
            No time to read 50-page PDFs? Let our AI do it for you. Our smart AI
            reads the details so you don't have to. Summarize any PDF in seconds
            and get the key points fast.
          </p>
        </span>
      </div>
    </div>
  );
};

export default GroupComponent11;
