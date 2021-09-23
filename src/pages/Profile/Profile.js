import moment from "moment";
import React, { useRef } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/user.actions";
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
  dispatch,
}) => {
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

  const employments = employment
    .map((val) => ({
      ...val,
      start_date: moment(val.start_date).format("YYYY-MM-DD"),
      end_date: moment(val.end_date).format("YYYY-MM-DD"),
    }))
    .sort(
      (a, b) => moment(b.start_date).valueOf() - moment(a.start_date).valueOf()
    );

  const updateDetails = (section, info) =>
    dispatch(updateProfile(section, info));

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
              ref={refs}
              updateDetails={updateDetails}
              info={info}
              skills={skills}
              employments={employments}
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
});

export default connect(mapStateToProps)(Profile);
