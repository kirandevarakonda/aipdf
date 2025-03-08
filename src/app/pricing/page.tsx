import MainIntro4 from "../../components/MainIntro4";
import MainIntro5 from "../../components/MainIntro5";
import MainIntro10 from "../../components/MainIntro10";
import MainIntro9 from "../../components/MainIntro9";
import Header from "../../components/Header";
import HeaderAuth from "@/components/Headerauth";
import { auth } from "@clerk/nextjs/server";


export default function Pricing() {
    const { userId } = auth();
    console.log(userId);
    const isAuth = !!userId;
    return (
        <div className="pricing">
        {isAuth ? <HeaderAuth /> : <Header />}
        {/* <MainIntro4/> */}
        <div className="pt-14">
        <div className="mt-2 p-1">
          <div className="flex flex-col justify-center items-center">
            <span className="text-purple-600 font-medium text-3xl pt-4">Pricing✨</span>
            <div className="items-center flex-col">
            <span className="font-bold text-4xl pt-4 text-center">Find the <span className="text-purple-600 text-center">Perfect plan</span></span>
            </div>
            <span className="font-light text-gray-500 pt-4 p-6 text-center">Simple, transparent pricing that grows with you. Free to start and cheap to scale.</span>
          </div>
      </div>
        <MainIntro5/>
        <MainIntro9/>
        <MainIntro10/>
        </div>
        </div>
    );
}

