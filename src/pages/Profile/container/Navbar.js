import React, { forwardRef } from "react";
import Title from "../../../components/atoms/Title";
import { PROFILE_NAVBAR } from "../data";

const Navbar = forwardRef(({ executeScroll }, ref) => {
  return (
    <div className="profile__navContainer">
      {PROFILE_NAVBAR.map((nav, index) => (
        <div
          key={index}
          className="profile__nav"
          onClick={executeScroll.bind(this, ref[index])}
        >
          <Title variant="pr-19-2">{nav.title}</Title>
        </div>
      ))}
    </div>
  );
});

export default Navbar;
