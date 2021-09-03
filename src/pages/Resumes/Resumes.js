import React from "react";
import Title from "../../components/atoms/Title";
import ResumeLists from "./container/ResumeLists";

const Resumes = () => {
  return (
    <section className="section-dashboard">
      <Title variant="pr-24-2" className="u-margin-bottom-30">
        Resumes Recieved
      </Title>
      <ResumeLists />
    </section>
  );
};

export default Resumes;
