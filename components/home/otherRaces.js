import React from "react";
import { Error } from "../layout/error";
import { Text } from "./text";

export const OtherRaces = ({ race }) => {
  if (!race) return <Error />;
  return (
    <div className="my-2">
      <div className="h-40 mx-1 border-l-4 p-1 border-f1-red  hover:shadow-md transition-all ease-in-out duration-500">
        <Text
          title="Round: "
          text={race?.round}
          colorText="black"
          marginLeft="1"
          fontSize="md"
          fontWeigth="medium"
        />
        <Text
          title="Circuit: "
          text={race?.Circuit.circuitName}
          colorText="black"
          marginLeft="2"
          fontSize="sm"
          fontWeigth="medium"
        />
        <Text
          title="Location: "
          text={`${race?.Circuit.Location.locality}, ${race?.Circuit.Location.country}`}
          colorText="black"
          marginLeft="2"
          fontSize="sm"
          fontWeigth="medium"
        />
        <Text
          title="Date: "
          text={`${race?.date}, ${race?.time}`}
          colorText="black"
          marginLeft="2"
          fontSize="sm"
          fontWeigth="medium"
        />
      </div>
    </div>
  );
};
