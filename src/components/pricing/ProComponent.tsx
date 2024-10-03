import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { BsCheckCircle } from "react-icons/bs";

export type GroupComponent10Type = {
  className?: string;
  prop?: string;
  student?: string;
  propLeft?: CSSProperties["left"];
};

const ProComponent: NextPage<GroupComponent10Type> = ({
  className = "",
  propLeft,
  prop = "$9.99",
  student = "✨PRO",
}) => {
  const groupDivStyle: CSSProperties = useMemo(
    () => ({
      left: propLeft,
    }),
    [propLeft]
  );

  return (
    <div
      className={`relative w-full text-left align-top text-text-color font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className=" rounded-xl border-8 border-zinc-400 p-4 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-4xl font-bold px-3 text-transparent !bg-clip-text [background:linear-gradient(-63.46deg,_#0379ff,_#b74bdd_50%,_#ff805f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{student}</h3>
          <h3 className="text-sm font-semibold align- text-transparent !bg-clip-text [background:linear-gradient(-63.46deg,_#0379ff,_#b74bdd_50%,_#ff805f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Most Popular</h3>
          <p className="mt-2">
            Ideal for anyone interested in AI, this plan offers limited access to
            all core features.
          </p>
          <div className="text-center mt-4">
            <span className="text-2xl font-bold text-transparent !bg-clip-text [background:linear-gradient(-63.46deg,_#0379ff,_#b74bdd_50%,_#ff805f)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{prop}</span>
            <span className="text-lg text-gray-500">/month</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-gray-200 rounded-lg px-4 py-2">
            Get started
          </button>
        </div>
        <div className="mt-8">
          <div className="font-semibold flex items-center"><BsCheckCircle className="mr-2" />Access to basic features</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Up to 500 free pages</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />$0.02 per additional page</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />3 users included</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Premium chat support</div>
          <div className="mt-2 font-semibold flex items-center"><BsCheckCircle className="mr-2" />Uses GPT 4.0 model</div>
        </div>
      </div>
    </div>
  );
};

export default ProComponent;



