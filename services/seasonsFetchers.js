import axios from "axios";

const limitJson = ".json?limit=10000";

export const getAll = async url => {
  const seasonsData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/${url}${limitJson}`
  );
  return seasonsData.data.MRData.SeasonTable;
};

export const getOneSeason = async year => {
  const seasonData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/${year}/results${limitJson}`
  );
  return seasonData.data.MRData.RaceTable;
};

export const getCurrentSeason = async () => {
  const seasonData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/current${limitJson}`
  );
  return seasonData.data.MRData;
};
