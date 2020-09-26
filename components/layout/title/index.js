import React from "react";

export const Title = ({title}) => {
  return (
    <div>
      <h1 className="text-3xl uppercase text-center text-f1-black font-medium my-3">
        {title}
      </h1>
    </div>
  );
};
