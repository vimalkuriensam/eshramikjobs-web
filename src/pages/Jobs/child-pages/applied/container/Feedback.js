import React from "react";

import Title from "../../../../../components/atoms/Title";
import FeedbackLists from "./FeedbackLists";

const Feedback = () => {
  return (
    <div className="home__feedback">
      <div className="u-text-center">
        <Title variant="pr-54-1">What our users say</Title>
      </div>
      <FeedbackLists />
    </div>
  );
};

export default Feedback;
