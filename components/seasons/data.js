import React from "react";
import { useRouter } from "next/router";

export const Data = ({ title, text, url }) => {
  const router = useRouter();

  const handleLink = url => router.push(url);

  return (
    <div className="ml-2">
      {url ? (
        <a
          onClick={() => handleLink(url)}
          className="cursor-pointer hover:text-f1-red hover:font-medium"
        >
          <span className="font-light text-sm">{title}</span>
          <span className="font-hairline text-xs ml-1">{text}</span>
        </a>
      ) : (
        <>
          <span className="font-light text-sm">{title}</span>
          <span className="font-hairline text-xs ml-1">{text}</span>
        </>
      )}
    </div>
  );
};
