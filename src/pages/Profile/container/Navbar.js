import React from "react";
import Title from "../../../components/atoms/Title";
import { PROFILE_NAVBAR } from "../data";

const Navbar = () => {
  return (
    <div className="profile__navContainer">
      {PROFILE_NAVBAR.map((nav, index) => (
        <div key={index} className="profile__nav">
          <Title variant="pr-19-2">{nav.title}</Title>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
