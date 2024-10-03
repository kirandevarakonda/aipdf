import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { BsCheckCircle } from "react-icons/bs";

export type GroupComponent10Type = {
  className?: string;
  prop?: string;
  student?: string;
  propLeft?: CSSProperties["left"];
};

const TeamComponent: NextPage<GroupComponent10Type> = ({
  className = "",
  propLeft,
  prop = "$49",
  student="TEAM",
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
          <h3 className="text-3xl font-bold">{student}</h3>
          <p className="mt-2">
            Ideal for anyone interested in AI, this plan offers limited access to
            all core features.
          </p>
          <div className="text-center mt-4">
            <span className="text-3xl font-bold">{prop}</span>
            <span className="text-lg text-gray-500">/month</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-gray-200 rounded-lg px-4 py-2">
            Get started
          </button>
        </div>
        <div className="mt-6">
        <div className="font-semibold flex items-center"><BsCheckCircle className="mr-2" />Access to basic features</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Up to 5000 free pages</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />$0.01 per additional page</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />10 users included</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Premium chat support</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Uses GPT 4.0 model</div>
          <div className="mt-2 font-semibold flex items-start"><BsCheckCircle className="mr-2 size-5" />Department & folder level permissions</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />OCR images & scanned text</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Response personalization</div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;



