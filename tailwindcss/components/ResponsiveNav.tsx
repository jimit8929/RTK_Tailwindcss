import Image from "next/image";
import React from "react";

const ResponsiveNav = () => {
  return (
    <div className="shadow-aceternity mx-auto flex max-w-4xl items-center justify-between rounded-full border border-neutral-200 bg-white p-2 px-4">
      <Image
        src="/globe.svg"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div className="flex items-center gap-2">
        {["Home", "Features", "Pricing", "Support"].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="mr-10 text-sm font-medium text-neutral-500 hover:text-neutral-900"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNav;
