import { useEffect, useState } from "react";
import { getCurrentSeason } from "../services/seasonsFetchers";
import { Title } from "../components/layout/title";

const IndexPage = ({ season }) => {
  const [today, setToday] = useState({});

  useEffect(() => {
    const now = new Date();
    const date = `${now
      .getFullYear()
      .toString()
      .trim()}-${
      now
        .getMonth()
        .toString()
        .trim() < 10
        ? "0" +
          now
            .getMonth()
            .toString()
            .trim()
        : now
            .getMonth()
            .toString()
            .trim()
    }-${
      now
        .getDay()
        .toString()
        .trim() < 10
        ? "0" +
          now
            .getDay()
            .toString()
            .trim()
        : now
            .getDay()
            .toString()
            .trim()
    }`;
    setToday(date)
  }, []);

  return (
    <div>
      <Title title={today} />
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
