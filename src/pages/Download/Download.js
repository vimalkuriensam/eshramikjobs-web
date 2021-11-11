import React, { useEffect, useState } from "react";
import ReactPDF, { pdf } from "@react-pdf/renderer";

import Text from "../../components/atoms/Text";
import Title from "../../components/atoms/Title";

import { saveAs } from "file-saver";
import { connect } from "react-redux";
import { getResume } from "../../redux/actions/user.actions";
import moment from "moment";
import Icon from "../../components/atoms/Icon";
import PDFSaver from "../../components/organisms/PDFSaver";

const Download = ({ resume, match, dispatch }) => {
  const [resumeLoader, setResumeLoader] = useState(false);
  console.log(resume);
  const { get1, get2, get3, get4, get5, get6 } = resume;
  useEffect(() => {
    // handleResume();
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

  const onDownloadResume = async () => {
    const blob = await pdf(<PDFSaver />).toBlob();
    if (blob)
      saveAs(
        blob,
        `${get1[0].full_name.replace(/ +/g, "")}${moment().valueOf()}`
      );
  };

  const Resume = () => (
    <div className="recruit__resumeContainer">
      <div className="u-space-between">
        <Title variant="pr-19-3" className="u-display-block">
          Resume headline
        </Title>
        <div className="recruit__download" onClick={onDownloadResume}>
          <Icon name="Download" />
          <Text>Download Resume</Text>
        </div>
      </div>
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
        Employment Details
      </Title>
      {get5.map((val, index) => (
        <div key={index}>
          <br />
          <Text
            variant="pl-14-1"
            className="u-display-block u-max-width-60 u-text-justify"
          >
            {val.title}
            <br />
            {val.name}
            <br />
            {JSON.parse(val.job_description)}
          </Text>
        </div>
      ))}
      <Title variant="pr-19-3" className="u-display-block u-margin-top-40">
        Overseas opportunity
      </Title>
      <Text variant="pl-14-1" className="u-display-block">
        {get6[0].overseas ? "Yes" : "No"}
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
            {get1[0].full_name}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Date of Birth
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {moment(get1[0].dob).format("DD MM YYYY")}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Gender
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].gender}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Area Pin Code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].pin}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Marital Status
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].marital_status}
          </Text>
        </div>
        <div className="col-1-of-4">
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Hometown
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].per_street_locality}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Permanent Address
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {`${get1[0].per_house_no} ${get1[0].per_region} ${get1[0].per_street_locality} ${get1[0].per_state}`}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Pin code
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].per_pin}
          </Text>
          <Text variant="pl-14-3" className="u-display-block u-margin-top-30">
            Email
          </Text>
          <Text variant="pl-14-1" className="u-display-block">
            {get1[0].email}
          </Text>
        </div>
      </div>
    </div>
  );

  return (
    <div id="docs">
      <Resume />
    </div>
  );
};

const mapStateToProps = (state) => ({
  resume: state.user.resume,
});

export default connect(mapStateToProps)(Download);
