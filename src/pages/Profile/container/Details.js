import React, { forwardRef } from "react";

import DetailsContainer from "./DetailsContainer";
import EmployementDetails from "./EmployementDetails";
import Headline from "./Headline";
import Overseas from "./Overseas";
import PersonalInfo from "./PersonalInfo";
import Qualification from "./Qualification";
import Skills from "./Skills";

const Details = forwardRef((props, ref) => {
  const { 0: ref1, 1: ref2, 2: ref3, 3: ref4, 4: ref5, 5: ref6 } = ref;
  return (
    <div className="profile__detailsMain">
      <DetailsContainer title="Resume headline" ref={ref1}>
        <Headline info={props.headline} updateInfo={props.updateDetails} />
      </DetailsContainer>

      <DetailsContainer title="Qualification" ref={ref2}>
        <Qualification
          info={props.education}
          updateInfo={props.updateDetails}
          colleges={props.colleges}
          degrees={props.degrees}
          institutions={props.institutions}
          boards={props.boards}
        />
      </DetailsContainer>

      <DetailsContainer title="Skills" ref={ref3}>
        <Skills info={props.skills} updateInfo={props.updateDetails} />
      </DetailsContainer>

      <DetailsContainer title="Employeement Details" ref={ref4}>
        <EmployementDetails
          info={props.employments}
          employmentLocations={props.employmentLocations}
          getEmploymentLocation={props.getEmploymentLocation}
          technical={props.technical}
        />
      </DetailsContainer>

      <DetailsContainer title="Overseas opportunity" ref={ref5}>
        <Overseas info={props.overseas} updateInfo={props.updateDetails} />
      </DetailsContainer>

      <DetailsContainer title="Personal Information" ref={ref6}>
        <PersonalInfo
          info={props.info}
          getLocation={props.getLocation}
          addressState={props.addressState}
          addressDistrict={props.addressDistrict}
          addressRegion={props.addressRegion}
          updateInfo={props.updateDetails}
        />
      </DetailsContainer>
    </div>
  );
});

export default Details;
