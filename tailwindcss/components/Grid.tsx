import React from "react";

const Grid = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl border-x border-neutral-200 bg-gray-200">
      <div className="grid grid-cols-3 gap-10">
        <div className="h-40 w-full bg-red-500 shrink-0 col-span-1" />
        <div className="h-40 w-full bg-green-500 shrink-0 col-span-2" />
        <div className="h-40 w-full bg-yellow-500 shrink-0 col-span-3" />
        <div className="h-40 w-full bg-orange-500 shrink-0 col-span-2" />
        <div className="h-40 w-full bg-blue-500 shrink-0 col-span-1" />

      </div>
    </div>
  );
};

export default Grid;
