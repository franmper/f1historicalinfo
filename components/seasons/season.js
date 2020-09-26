import React from "react";
import useSWR from "swr";
import { getOneSeason } from "../../services/fetchers";
import { Loading } from "../layout/loading";
import { Error } from "../layout/error";
import { Data } from "./data";

export const Season = ({ year }) => {
  const { data, error } = useSWR(year, getOneSeason);
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <>
      <div className="max-w-2xl sm:w-10/12 w-full rounded overflow-hidden shadow-md p-6">
        <div>
          <div className="font-bold text-xl mb-6">
            <span className="font-thin">Season</span> {data.season}
          </div>
        </div>
        <div className="mx-2 mb-2">
          {data?.Races?.map(race => {
            return (
              <div
                key={race.round}
                className="border-r-2 border-b-2 rounded-br-md border-f1-red mb-3 p-3 bg-gray-100 hover:shadow-md transition-all ease-in-out duration-500"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold text-base">
                      <span className="font-thin">Round</span> {race.round}
                    </div>
                    <Data
                      title={`Circuit: ${race.Circuit.circuitName}`}
                      text={`${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`}
                    />
                    <Data
                      title={`Date: `}
                      text={`${race.date}, ${race.time}`}
                    />
                    <Data
                      title={`Winner: `}
                      text={`${race.Results[0].Driver?.givenName} ${race.Results[0].Driver?.familyName}`}
                    />
                    <Data
                      title={`Team: `}
                      text={`${race.Results[0].Constructor?.name}`}
                    />
                    <Data
                      title={`Fatest Lap: `}
                      text={race.Results[0].FastestLap?.Time.time}
                    />
                    <Data
                      title={`Average Speed: `}
                      text={
                        (race.Results[0].FastestLap?.AverageSpeed.speed,
                        " ",
                        race.Results[0].FastestLap?.AverageSpeed.units)
                      }
                    />
                  </div>
                  <div className="flex justify-end items-end">
                    <img
                      className="h-24 w-24"
                      src="/img/circuits/sample.png"
                      alt="Circuit"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
