import React from "react";

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

const BuyPlans = () => {
  return (
    <section className="section-recruit">
      <Hero />
      <PlanContainer
        variant="primary"
        headerContents={DISTRICT_CONTENTS}
        contents={DISTRICT_PLAN}
      />
      <PlanContainer
        variant="secondary"
        headerContents={STATE_CONTENTS}
        contents={STATE_PLAN}
      />
      <PlanContainer
        variant="tertiary"
        headerContents={NATIONAL_CONTENTS}
        contents={NATIONAL_PLAN}
      />
    </section>
  );
};

export default BuyPlans;
