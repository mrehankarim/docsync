import React from "react";

const Background = () => {
  return (
    <>
      <div className="h-screen bg-zinc-800 relative z-[2]">
        <div className="text-2xl font-medium text-zinc-900 absolute top-[5%] left-[50%] -translate-x-[50%]">
          Document.
        </div>
        <h1 className="text-[12vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
