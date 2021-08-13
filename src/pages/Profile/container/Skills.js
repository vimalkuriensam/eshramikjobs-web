import React from "react";
import Title from "../../../components/atoms/Title";

const Skills = () => {
  return (
    <div className="recruit__skills">
      {["Auto cad", "3Ds Max", "Catia", "Revit", "Project Management"].map(
        (skill, index) => (
          <span key={index} className="form__textarea--textgroup">
            <Title variant="pr-19-3">{skill}</Title>
          </span>
        )
      )}
    </div>
  );
};

export default Skills;
