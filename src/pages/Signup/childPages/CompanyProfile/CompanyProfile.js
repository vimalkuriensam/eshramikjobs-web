import React from "react";
import Image from "../../../../components/atoms/Image";

import Details from "./container/Details";

const CompanyProfile = () => {
  const onSetHome = () => {};
  return (
    <div>
      <div className="recruiterHeader">
        <Image
          onIconClick={onSetHome}
          name="Logo"
          className="adminHeader__logo"
        />
      </div>
      <section className="section-company-profile">
        <Image name="hexagon" className="authentication__hexagon1" />
        <Image name="hexagon" className="authentication__hexagon2" />
        <Details />
      </section>
    </div>
  );
};

export default CompanyProfile;
