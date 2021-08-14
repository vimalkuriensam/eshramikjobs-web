import React, { useEffect, useState } from "react";

import PlanContainer from "./container/PlanContainer";
import Hero from "./container/Hero";
import {
  DISTRICT_CONTENTS,
  DISTRICT_PLAN,
  NATIONAL_CONTENTS,
  NATIONAL_PLAN,
  STATE_CONTENTS,
  STATE_PLAN,
} from "./data";
import { connect } from "react-redux";
import { getPlans } from "../../redux/actions/recruit.action";
import { Fragment } from "react";
import Title from "../../components/atoms/Title";

const BuyPlans = ({ dispatch }) => {
  const loadPlans = async () => {
    const plans = await dispatch(getPlans());
    setDistrictPlan(plans.filter((plan) => plan.name === "DISTRICT_PLAN"));
    setStatePlan(plans.filter((plan) => plan.name.trim() === "STATE_PLAN"));
    setNationalPlan(plans.filter((plan) => plan.name.trim() === "NATIONAL_PLAN"));
    setPlanStatus(true);
    console.log(plans);
  };
  useEffect(() => {
    loadPlans();
  }, []);

  const [planStatus, setPlanStatus] = useState(false);
  const [districtPlan, setDistrictPlan] = useState([]);
  const [statePlan, setStatePlan] = useState([]);
  const [nationalPlan, setNationalPlan] = useState([]);
  return (
    <section className="section-recruit">
      <Hero />
      {planStatus ? (
        <Fragment>
          <PlanContainer
            variant="primary"
            headerContents={DISTRICT_CONTENTS}
            contents={districtPlan}
          />
          <PlanContainer
            variant="secondary"
            headerContents={STATE_CONTENTS}
            contents={statePlan}
          />
          <PlanContainer
            variant="tertiary"
            headerContents={NATIONAL_CONTENTS}
            contents={nationalPlan}
          />
        </Fragment>
      ) : (
        <div className="u-display-block u-text-center u-margin-top-40">
          <Title variant="pr-15-1">Loading Plan...</Title>
        </div>
      )}
    </section>
  );
};

export default connect()(BuyPlans);
