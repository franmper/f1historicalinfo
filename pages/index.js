import { useEffect, useState } from "react";
import { getCurrentSeason } from "../services/seasonsFetchers";
import { Title } from "../components/layout/title";
import { NextRace } from "../components/home/nextRace";
import { OtherRaces } from "../components/home/otherRaces";

const IndexPage = ({ season }) => {
  const now = new Date();
  const nextRacesArray = [];
  const previousRacesArray = [];
  season.Races.map(race => {
    const raceDate = new Date(race.date);
    if (now < raceDate) {
      nextRacesArray.push(race);
    } else {
      previousRacesArray.push(race);
    }
  });
  const nextRace = nextRacesArray[0];

  return (
    <div>
      <div className="flex justify-center my-3">
        <span className="text-xl font-medium border-b-4 border-f1-red">Season:</span>
        <span className="text-xl font-thin border-b-4 border-f1-red pl-2">{season.season}</span>
      </div>
      <div>
        <NextRace nextRace={nextRace} />
      </div>
      <div className="mt-5 lg:w-4/6 lg:mx-auto">
        <span className="text-2xl font-thin ml-5 border-b-2 border-f1-red">
          Next Races
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-3">
          {nextRacesArray.map((race, index) => {
            if (index !== 0) {
              return <OtherRaces race={race} />;
            }
          })}
        </div>
      </div>
      <div className="mt-2 lg:w-4/6 lg:mx-auto">
        <span className="text-2xl font-thin ml-5 border-b-2 border-f1-red">
          Previous Races
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-3">
          {previousRacesArray.map((race, index) => {
            return <OtherRaces race={race} />;
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { RaceTable } = await getCurrentSeason("seasons");
  const season = RaceTable;

  return {
    props: {
      season
    }
  };
}

export default IndexPage;
