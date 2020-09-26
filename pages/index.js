import { useState } from "react";
import { getAll } from "../services/fetchers";
import { Title } from "../components/layout/title";

const IndexPage = () => {
  return (
    <div>
      <Title title="Home" />
    </div>
  );
};

export default IndexPage;
