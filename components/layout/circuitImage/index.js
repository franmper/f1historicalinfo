import React from "react";

export const CircuitImage = ({
  verticalPosition,
  width,
  heigth,
  backgroundColor,
  shadow,
  padding,
  url
}) => {
  return (
    <div
      className={`flex justify-end items-${verticalPosition} self-center w-${width} h-${heigth} rounded ${shadow} ${backgroundColor}`}
    >
      <img className={`${padding}`} src={`${url}`} alt="Circuit" />
    </div>
  );
};
