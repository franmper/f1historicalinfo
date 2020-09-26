import axios from "axios";

export const getAll = async (url) => {
  const seasonsData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/${url}.json?limit=10000`
  );
  return seasonsData
};

export const getOneSeason = async year => {
  const seasonData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/${year}/results.json?limit=10000`
  );
  return seasonData.data.MRData.RaceTable
}