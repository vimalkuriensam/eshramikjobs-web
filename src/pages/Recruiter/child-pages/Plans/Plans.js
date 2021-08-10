import React from "react";
import Title from "../../../../components/atoms/Title";
import PlanDetails from "./container/PlanDetails";

const Plans = () => {
  return (
    <section className="section-recruit">
      <Title variant="pr-24-2 u-display-block u-margin-bottom-30">Profile Details</Title>
      <PlanDetails />
    </section>
  );
};

export default Plans;
