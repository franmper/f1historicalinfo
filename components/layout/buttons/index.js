import React from "react";

export const SimpleButton = ({text, handleClick}) => {
  return (
    <>
      <button className="px-4 py-2 bg-f1-gray text-f1-white hover:shadow-md transition-all ease-in-out duration-500" onClick={handleClick}>
        <span className="text-3xl font-thin">{text}</span>
      </button>
    </>
  );
};
