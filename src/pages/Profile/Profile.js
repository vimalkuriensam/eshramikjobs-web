import React from "react";
import Advertisement from "../Home/container/Advertisement";
import Feedback from "../Home/container/Feedback";
import Details from "./container/Details";
import Main from "./container/Main";
import Navbar from "./container/Navbar";

const Profile = () => {
  return (
    <div>
      <section className="section-profile">
        <Main />
        <div className="row u-margin-top-30">
            <div className="col-1-of-3"><Navbar /></div>
            <div className="col-2-of-3"><Details /></div>
        </div>
      </section>
      <Feedback />
      <Advertisement />
    </div>
  );
};

export default Profile;
