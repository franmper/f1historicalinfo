import { useState } from "react";
import { getAll } from "../../services/fetchers";
import { Season } from "../../components/seasons/season";
import { Title } from "../../components/layout/title";
import { SimpleButton } from "../../components/layout/buttons";

const Seasons = ({ seasons }) => {
  const [seasonYear, setSeasonYear] = useState(seasons[0].season);

  const handleChange = e => {
    setSeasonYear(e.target.value);
  };

  const handleClick = e => {
    switch (e) {
      case "minus":
        setSeasonYear(prevState => parseInt(prevState) - 1);
        break;
      case "plus":
        setSeasonYear(prevState => parseInt(prevState) + 1);
        break;
    }
  };

  return (
    <div>
      <div>
        <Title title="Seasons" />
        <div className="flex justify-center">
          <SimpleButton text="-" handleClick={() => handleClick("minus")} />
          <input
            type="text"
            min={seasons[0].season}
            max={seasons[seasons.length - 1].season}
            step="1"
            className="appearance-none focus:outline-none py-3 bg-f1-gray text-f1-white text-center text-xl focus:shadow-md transition-all ease-in-out duration-300"
            value={seasonYear}
            onChange={handleChange}
            readOnly
          />
          <SimpleButton text="+" handleClick={() => handleClick("plus")} />
        </div>
        <div className="sm:mt-10 mt-5 flex justify-center items-center">
          <Season year={seasonYear} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await getAll("seasons");
  const seasons = data.MRData.SeasonTable.Seasons;

  return {
    props: {
      seasons
    }
  };
}

export default Seasons;
