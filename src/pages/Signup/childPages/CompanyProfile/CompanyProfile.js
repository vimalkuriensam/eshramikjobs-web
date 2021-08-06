import React from "react";
import Image from "../../../../components/atoms/Image";

import Details from "./container/Details";

const CompanyProfile = () => {
  return (
    <section className="section-company-profile">
      <Image name="hexagon" className="authentication__hexagon1" />
      <Image name="hexagon" className="authentication__hexagon2" />
      <Details />
    </section>
  );
};

export default CompanyProfile;
