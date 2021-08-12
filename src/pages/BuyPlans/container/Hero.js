import React from "react";
import Image from "../../../components/atoms/Image";
import Title from "../../../components/atoms/Title";

const Hero = () => {
  return (
    <div className="recruit__planHero">
      <Image name="plan-banner" className="recruit__planBanner" />
      <Title className="recruit__planTitle" variant="pr-36-1">
        Our Pricing Plans
      </Title>
    </div>
  );
};

export default Hero;
