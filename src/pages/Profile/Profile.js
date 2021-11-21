import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { updateProfile } from "../../redux/actions/user.actions";
import {
  getColleges,
  getDegrees,
  getDistrict,
  getInstitutions,
  getRegion,
  getState,
  getTechnicalCourses,
} from "../../redux/actions/profile.actions";
import { addMessage } from "../../redux/actions/utils.action";
import { funcMap } from "../../utils/data";
import Advertisement from "../Home/container/Advertisement";
import Feedback from "../Home/container/Feedback";
import Details from "./container/Details";
import Main from "./container/Main";
import Navbar from "./container/Navbar";

const Profile = ({
  basic,
  info,
  education,
  profession,
  skills,
  employment,
  colleges,
  degrees,
  institutions,
  boards,
  overseas,
  dispatch,
  addressState,
  addressRegion,
  addressDistrict,
  technical,
}) => {
  useEffect(() => {
    dispatch(getColleges());
    dispatch(getDegrees());
    dispatch(getInstitutions());
  }, []);

  const ref1 = useRef(null),
    ref2 = useRef(null),
    ref3 = useRef(null),
    ref4 = useRef(null),
    ref5 = useRef(null),
    ref6 = useRef(null);

  const refs = {
    0: ref1,
    1: ref2,
    2: ref3,
    3: ref4,
    4: ref5,
    5: ref6,
  };

  const executeScroll = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  const [employmentLocations, setEmploymentLocations] = useState(
    employment.map(() => [])
  );

  const employments = employment
    .map((val) => ({
      ...val,
      start_date: moment(val.start_date).format("YYYY-MM-DD"),
      end_date: moment(val.end_date).format("YYYY-MM-DD"),
    }))
    .sort(
      (a, b) => moment(b.start_date).valueOf() - moment(a.start_date).valueOf()
    );

  const updateDetails = async (section, info) => {
    const message = await dispatch(updateProfile(section, info));
    if (message) {
      const response = await funcMap["getProfileInfo"](dispatch, false);
      if (response)
        dispatch(
          addMessage({
            type: "info",
            content: message,
          })
        );
      return true;
    }
  };

  const getLocation = async ({ state, district }) => {
    const resp = await Promise.all([
      dispatch(getState()),
      dispatch(getDistrict({ state })),
      dispatch(getRegion({ district })),
    ]);
    if (resp) return true;
  };

  const getEmploymentLocation = async () => {
    const resp1 = await Promise.all([
      ...employments.map((val) =>
        dispatch(getDistrict({ state: val.location_state }))
      ),
      dispatch(getTechnicalCourses()),
    ]);
    if (resp1) {
      setEmploymentLocations(resp1.slice(0, -1));
      return true;
    }
  };

  return (
    <div>
      <section className="section-profile">
        <Main info={info} basic={basic} />
        <div className="row u-margin-top-30 profile__mainWrapper">
          <div className="col-1-of-3">
            <Navbar ref={refs} executeScroll={executeScroll} />
          </div>
          <div className="col-2-of-3">
            <Details
              headline={employments[0]}
              education={education}
              ref={refs}
              updateDetails={updateDetails}
              info={info}
              skills={skills}
              employments={employments}
              colleges={colleges}
              degrees={degrees}
              institutions={institutions}
              boards={boards}
              overseas={overseas}
              getLocation={getLocation}
              addressState={addressState}
              addressDistrict={addressDistrict}
              addressRegion={addressRegion}
              employmentLocations={employmentLocations}
              technical={technical}
              getEmploymentLocation={getEmploymentLocation}
            />
          </div>
        </div>
      </section>
      <Feedback />
      <Advertisement />
    </div>
  );
};

const mapStateToProps = (state) => ({
  basic: state.user.basic,
  info: state.user.profile.info,
  education: state.user.profile.education,
  profession: state.user.profile.profession,
  skills: state.user.profile.skills,
  employment: state.user.profile.employment,
  overseas: state.user.profile.overseas,
  colleges: state.profile.colleges,
  degrees: state.profile.degrees,
  institutions: state.profile.institutionName,
  boards: state.profile.boardName,
  technical: state.profile.technical,
  addressState: state.profile.addressState,
  addressDistrict: state.profile.addressDistrict,
  addressRegion: state.profile.addressRegion,
});

export default connect(mapStateToProps)(Profile);
