import React, { useRef } from "react";
import Advertisement from "../Home/container/Advertisement";
import Feedback from "../Home/container/Feedback";
import Details from "./container/Details";
import Main from "./container/Main";
import Navbar from "./container/Navbar";

const Profile = () => {
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
  return (
    <div>
      <section className="section-profile">
        <Main />
        <div className="row u-margin-top-30">
          <div className="col-1-of-3">
            <Navbar ref={refs} executeScroll={executeScroll} />
          </div>
          <div className="col-2-of-3">
            <Details ref={refs} />
          </div>
        </div>
      </section>
      <Feedback />
      <Advertisement />
    </div>
  );
};

export default Profile;
