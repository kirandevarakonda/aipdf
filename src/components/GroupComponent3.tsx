import type { NextPage } from "next";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`relative mx-auto mt-[2343px] w-[90%] max-w-[1200px] h-[422px] text-center text-lg text-black font-inter rounded-31xl overflow-hidden ${className}`}
    >
      <img
        className="w-full h-full object-cover rounded-3xl"
        alt=""
        src="/rectangle-3.svg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-xl text-primary">
        <div className="font-medium text-left">
          {`✨ `}
          <span className="uppercase text-purple">Get started</span>
        </div>
        <b className="mt-4 text-4xl leading-[50px] text-black">
          Built for any use case
        </b>
        <div className="mt-4 text-lg leading-[28px] text-text-color">
          Click on each option to try it out 👇
        </div>
        <div className="mt-10 flex justify-center gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] rounded-xl bg-white w-60 h-[50px] flex items-center justify-center"
            >
              <a
                className="font-medium text-[inherit] [text-decoration:none]"
                href="https://pdf.ai/use-cases/training-documents"
                target="_blank"
              >
                employee_training.pdf
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="shadow-[0px_0px_5px_rgba(0,_0,_0,_0.15)] rounded-xl bg-white w-60 h-[50px] flex items-center justify-center"
            >
              <div className="font-medium">employee_training.pdf</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;





// import type { NextPage } from "next";

// export type GroupComponent3Type = {
//   className?: string;
// };

// const GroupComponent3: NextPage<GroupComponent3Type> = ({ className = "" }) => {
//   return (
//     <div className={`w-full flex flex-col items-center text-center text-lg text-black font-inter ${className}`}>
//       <img className="rounded-[31px] w-full h-[422px]" alt="" src="/rectangle-3.svg" />
//       <div className="mt-5 w-[630px]">
//         <p className="font-medium text-left">✨ <span className="uppercase">Get started</span></p>
//         <b className="text-2xl leading-[50px] text-black">Built for any use case</b>
//         <p className="mt-2 text-lg leading-[28px] text-text-color">Click on each option to try it out 👇</p>
//       </div>
//       <div className="grid grid-cols-3 gap-4 mt-4 w-full max-w-[760px]">
//         {Array.from({ length: 3 }).map((_, index) => (
//           <div key={index} className="shadow-lg rounded-lg bg-white p-4">
//             <a href="https://pdf.ai/use-cases/training-documents" target="_blank">
//               employee_training.pdf
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GroupComponent3;