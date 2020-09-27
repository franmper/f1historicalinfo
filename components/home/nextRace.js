import React from "react";
import { CircuitImage } from "../layout/circuitImage";
import { Text } from "./text";

export const NextRace = ({ nextRace }) => {
  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="flex justify-between w-11/12 sm:w-4/6 md:w-2/4 sm:mx-auto mx-5 rounded-bl-md border-l-2 border-b-2 p-3 border-f1-red shadow-md  bg-f1-black">
        <div>
          <Text
            title="Next Race: "
            text={nextRace?.raceName}
            colorText="white"
            fontSize="xl"
            fontWeigth="bold"
          />
          <Text
            title="Round: "
            text={nextRace?.round}
            colorText="white"
            marginLeft="5"
            fontSize="sm"
            fontWeigth="medium"
          />
          <Text
            title="Circuit: "
            text={nextRace?.Circuit.circuitName}
            colorText="white"
            marginLeft="5"
            fontSize="sm"
            fontWeigth="medium"
          />
          <Text
            title="Location: "
            text={`${nextRace?.Circuit.Location.locality}, ${nextRace?.Circuit.Location.country}`}
            colorText="white"
            marginLeft="5"
            fontSize="sm"
            fontWeigth="medium"
          />
          <Text
            title="Date: "
            text={`${nextRace?.date}, ${nextRace?.time}`}
            colorText="white"
            marginLeft="5"
            fontSize="sm"
            fontWeigth="medium"
          />
        </div>
        <CircuitImage
          verticalPosition="center"
          width="32"
          heigth="32"
          backgroundColor="bg-f1-white"
          shadow="shadow-lg"
          padding="p-3"
          url="/img/circuits/sample.png"
        />
      </div>
    </div>
  );
};
