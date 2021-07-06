import React from "react";

import Dropdown from "../../components/atoms/Dropdown";

const Home = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <Dropdown contents={["a", "b"]} />
    </div>
  );
};

export default Home;
