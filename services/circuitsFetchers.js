import axios from "axios";

const limitJson = ".json?limit=10000";

export const getOneCircuit = async circuit => {
  const seasonsData = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/circuits/${circuit}${limitJson}`
  );
  return seasonsData.data.MRData.CircuitTable;
};
