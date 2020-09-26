import React from "react";

export const Loading = () => {
  return (
    <span className="flex justify-center items-center h-auto">
      <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-f1-red opacity-75"></span>
      <span className="rounded-full relative inline-flex h-16 w-16 rounded-full bg-f1-red"></span>
    </span>
  );
};
