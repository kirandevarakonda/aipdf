import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent7Type = {
  className?: string;
  title?: string;
  description?: string;
  stepNumber?: string;
  imageSrc?: string;
  /** Style props */
  propTop?: CSSProperties["top"];
};

const GroupComponent7: NextPage<GroupComponent7Type> = ({
  className = "",
  propTop,
  title,
  description,
  stepNumber,
  imageSrc,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`relative w-full max-w-[1290px] flex flex-col md:flex-row items-center mb-8 ${className}`}
      style={containerStyle}
    >
      {/* Step Number with Line */}
      <div className="flex flex-col items-center w-12 mr-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-purple text-lg font-semibold mb-4">
          {stepNumber}
        </div>
        <div className="w-0.5 bg-gray-300 h-full" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-lg text-gray-700">{description}</p>
      </div>

      {/* Image */}
      <img
        className="w-full md:w-[630px] h-[420px] object-cover rounded-xl mt-4 md:mt-0"
        alt=""
        src={imageSrc}
      />
    </div>
  );
};

export default GroupComponent7;
