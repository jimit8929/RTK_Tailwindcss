import React from "react";

export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button
        className="border border-gray-200 bg-slate-100 text-gray-900 px-4 py-2
      hover:bg-[#E4E8EE] transition duration-200 cursor-pointer rounded-full 
      "
      >
        What are early stage tax requirements?
      </button>

      <div>
        <h1 className="font-semibold mt-8 text-5xl text-black tracking-tight text-center">
          Magically Simplify <br /> Accounting and Taxes
        </h1>
        <p className="max-w-xl text-center mt-4 mx-auto text-base text-neutral-700">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set
          up in 10 mins. Back to building by 12:43am.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          className="bg-[#2679F3] text-white px-4 py-2 rounded-lg font-bold
      shadow-lg text-shadow-md tracking-wide cursor-pointer
      "
        >
          Get Started
        </button>

        <button
          className="text-black px-4 py-2 rounded-lg font-bold
      text-shadow-md tracking-wide cursor-pointer
      "
        >
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;
