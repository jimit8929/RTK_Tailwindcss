import React from "react";

const ThemeHero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xl text-neutral-400">
        Say goodbye to the <span className="text-primary">outdated</span>{" "}
        financial tools. Every small{" "}
        <span className="text-primary">business</span> owner. regardless of the
        background, can now manage their business like pro. Simple. Intuitive.
        And never boring.
      </p>

      <div className="mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-300 ease-in-out placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer overflow-hidden rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent to-transparent"></div>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default ThemeHero;
