import React from "react";
import { useRouter } from "next/router";

export const Text = ({ title, text, url, colorText, marginLeft, fontSize, fontWeight }) => {
  const router = useRouter();

  const handleLink = url => router.push(url);

  return (
    <div>
      {url ? (
        <a
          onClick={() => handleLink(url)}
          className="cursor-pointer hover:text-f1-red hover:font-medium"
        >
          <p className={`text-${fontSize} font-${fontWeight} text-f1-${colorText} mt-2 ml-${marginLeft}`}>
          {title}
            <span className="font-thin">
            {text}
            </span>
          </p>
        </a>
      ) : (
        <>
          <p className={`text-${fontSize} font-${fontWeight} text-f1-${colorText} mt-2 ml-${marginLeft}`}>
          {title}
            <span className="font-thin">
            {text}
            </span>
          </p>
        </>
      )}
    </div>
  );
};
