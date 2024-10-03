import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { BsCheckCircle } from "react-icons/bs";

export type GroupComponent10Type = {
  className?: string;
  prop?: string;
  student?: string;
  propLeft?: CSSProperties["left"];
};

const FreeComponent: NextPage<GroupComponent10Type> = ({
  className = "",
  propLeft,
  prop = "$0",
  student = "FREE",
}) => {
  const groupDivStyle: CSSProperties = useMemo(
    () => ({
      left: propLeft,
    }),
    [propLeft]
  );

  return (
    <div
      className={` w-full text-left items-start text-base text-text-color font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className="border rounded-xl border-gainsboro-200 p-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold py-3 ">{student}</h3>
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
        <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Access to basic features </div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Up to 60 pages</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Up to 10 answers</div>
        </div>
      </div>
    </div>
  );
};

export default FreeComponent;



