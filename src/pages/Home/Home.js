import React, { useEffect } from "react";

import Hero from "./container/Hero";
import Categories from "./container/Categories";
import Feedback from "./container/Feedback";
import Advertisement from "./container/Advertisement";
import Samples from "./container/Samples";
import { connect } from "react-redux";

const Home = ({ isLogged }) => {
  return (
    <div className="page">
      <Hero />
      {!isLogged && <Categories />}
      <Samples />
      <Feedback />
      <Advertisement />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: !!state.auth.accessToken,
});

export default connect(mapStateToProps)(Home);
