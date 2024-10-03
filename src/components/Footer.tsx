"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";

export type MainFooter1Type = {
  className?: string;

  /** Style props */
  mainFooterPosition?: CSSProperties["position"];
  mainFooterTop?: CSSProperties["top"];
  mainFooterLeft?: CSSProperties["left"];
};

const MainFooter1: NextPage<MainFooter1Type> = ({
  className = "",
  mainFooterPosition,
  mainFooterTop,
  mainFooterLeft,
}) => {
  const mainFooterStyle: CSSProperties = useMemo(() => {
    return {
      position: mainFooterPosition,
      top: mainFooterTop,
      left: mainFooterLeft,
    };
  }, [mainFooterPosition, mainFooterTop, mainFooterLeft]);

  const router = useRouter();

  const onLayer3ContainerClick = useCallback(() => {
    router.push("/AIPDFChat");
  }, [router]);

  const onPricingTextClick = useCallback(() => {
    router.push("/AIPDFChat1");
  }, [router]);

  return (
    <div
      className={`w-full max-w-screen-xl mx-auto text-center text-sm text-white font-inter ${className}`}
      style={mainFooterStyle}
    >
      <div className="relative w-full bg-primary-dark py-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center mb-6">
            <div
              className="relative cursor-pointer w-1/2 md:w-1/3 lg:w-1/5 mb-4"
              onClick={onLayer3ContainerClick}
            >
              <img
                className="absolute inset-0 w-full h-full object-contain"
                alt=""
                src="/group-55.svg"
              />
              <img
                className="absolute inset-0 w-full h-full object-contain"
                alt=""
                src="/aipdfchat1.svg"
              />
            </div>
            <div className="flex flex-wrap justify-center w-full max-w-md mx-auto mb-6">
              <img
                className="w-1/4 md:w-1/6 mx-1"
                alt=""
                src="/frame4.svg"
              />
              <img
                className="w-1/4 md:w-1/6 mx-1"
                alt=""
                src="/frame5.svg"
              />
              <img
                className="w-1/4 md:w-1/6 mx-1"
                alt=""
                src="/frame6.svg"
              />
              <img
                className="w-1/4 md:w-1/6 mx-1"
                alt=""
                src="/frame7.svg"
              />
            </div>
          </div>

          <div className="flex justify-center mb-6 text-base">
            <div className="mx-4 font-medium cursor-pointer" onClick={() => router.push("/features")}>
              Features
            </div>
            <div className="mx-4 font-medium cursor-pointer" onClick={() => router.push("/use-case")}>
              Use Case
            </div>
            <div className="mx-4 font-medium cursor-pointer" onClick={onPricingTextClick}>
              Pricing
            </div>
            <div className="mx-4 font-medium cursor-pointer" onClick={() => router.push("/affiliates")}>
              Affiliates
            </div>
          </div>

          <div className="relative max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              alt=""
              src="/rectangle-31.svg"
            />
            <div className="relative text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to try our AI PDF Chat?</h2>
              <p className="text-lg mb-6">
                No time to read 50-page PDFs? Let our AI do it for you. Our smart AI reads the details so you don't have to. Summarize any PDF in seconds and get the key points fast.
              </p>
              <div className="flex justify-around">
                <button className="bg-black text-white py-2 px-4 rounded-lg font-semibold">
                  View Pricing
                </button>
                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg border border-gray-600 font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          <p>© 2024 AI PDF Chat Inc. All rights reserved. ChatGPT Writer</p>
        </div>
      </div>
      <div className="bg-blue-500 h-20"></div> {/* Blue background at the bottom */}
    </div>
  );
};

export default MainFooter1;
