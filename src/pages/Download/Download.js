import React, { useEffect, useState } from "react";

import html2canvas from "html2canvas";

import Text from "../../components/atoms/Text";
import Title from "../../components/atoms/Title";

import { jsPDF } from "jspdf";
import { connect } from "react-redux";
import { getResume } from "../../redux/actions/user.actions";

const Download = ({ resume, match, dispatch }) => {
  const [resumeLoader, setResumeLoader] = useState(false);
  console.log(resume);
  useEffect(() => {
    handleResume();
    // html2canvas(document.getElementById("docs")).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, "JPEG", 0, 0);
    //   pdf.save("download.pdf");
    // });
  }, []);

  const handleResume = async () => {
    const id = match.params.id;
    if (id) {
      const response = await dispatch(getResume({ id }));
      if (response) {
        setResumeLoader(true);
      }
    }
  };

  const Resume = () => (
    <div className="recruit__resumeContainer">
      <Title variant="pr-19-3" className="u-display-block">
        Resume headline
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        Construction supervisor
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Qualification
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        Diploma in civil engineering
        <br />
        MIT college of engineering
        <br />
        Pune University
        <br />
        2013 full time
        <br />
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Board
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        {resume.get2[resume.get2.length - 1].board_name}
        <br />
        2009
        <br />
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Skills
      </Title>
      <div className="recruit__skills">
        {resume.get4[resume.get4.length - 1].skill_list
          .split(",")
          .map((skill, index) => (
            <span key={index} className="form__textarea--textgroup">
              <Title variant="pr-19-3">{skill}</Title>
            </span>
          ))}
      </div>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Employement Details
      </Title>
      <Text
        variant="pl-14-1"
        className="u-display-block u-max-width-60 u-text-justify"
      >
        Construction supervisor
        <br />
        Kumar constructions
        <br />
        Is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Overseas opportunity
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        No
      </Text>
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Personal information
      </Title>
      <div className="row">
        <div className="col-1-of-4">
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Full Name
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Jhon Steve Dohe
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Date of Birth
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            25 Feb 1990
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Gender
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Male
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Area Pin Code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            416112
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Marital Status
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Single
          </Text>
        </div>
        <div className="col-1-of-4">
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Hometown
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            Peth Vadgaon
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Permanent Address
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            House no. 21, Magarpatta road
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Pin code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            112054
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Email
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            jhondohe52@gmail.com
          </Text>
        </div>
      </div>
    </div>
  );

  return (
    <div id="docs">
      {resumeLoader ? (
        <Resume />
      ) : (
        <div className="u-width-100 u-height-100 u-content-center">
          Loading Resume. Please Wait
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.user.resume,
});

export default connect(mapStateToProps)(Download);
