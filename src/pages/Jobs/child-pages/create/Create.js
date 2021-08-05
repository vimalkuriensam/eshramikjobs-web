import React from "react";
import Title from "../../../../components/atoms/Title";
import JobForm from "./container/JobForm";

const Create = () => {
  return (
    <section className="section-dashboard">
      <Title variant="pr-24-2" className="u-margin-bottom-30">
        Post new job
      </Title>
      <JobForm />
    </section>
  );
};

export default Create;
