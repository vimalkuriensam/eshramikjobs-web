import React from "react";

import Hero from "./container/Hero";
import Categories from "./container/Categories";
import Feedback from "./container/Feedback";
import Advertisement from "./container/Advertisement";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Feedback />
      <Advertisement />
    </div>
  );
};

export default Home;
