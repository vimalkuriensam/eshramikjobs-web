import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  pdf,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  headingMain: {
    fontSize: "23px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingForm: {
    fontSize: "17px",
    color: "#535353",
  },
  detailForm: {
    fontSize: "14px",
    display: "block",
    color: "#727272",
    marginTop: "5px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  marginTop20: {
    marginTop: "20px",
  },
  horizontalAlign: {
    display: "flex",
    flexDirection: "row",
  },
  horizontalPersonalInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  boxSkill: {
    display: "inline-block",
    width: "auto",
    height: "40px",
    padding: "10px 13px",
    backgroundColor: "#e6e6e6",
    borderRadius: "8px",
    margin: "6px 13px 6px 0",
  },
});

const PDFSaver = ({ resume }) => {
  const { get1, get2, get3, get4, get5, get6 } = resume;
  const lastEmployment = get5.sort((a, b) =>
    moment(b.end_date).valueOf() < moment(a.end_date).valueOf() ? -1 : 1
  );

  const employmentSort = get5.sort((a, b) =>
    moment(b.end_date).valueOf() > moment(a.end_date).valueOf() ? -1 : 1
  );
  const personalInfoView = ({ heading, detail, right = false }) => {
    if (right)
      return (
        <View>
          <Text style={styles.detailForm}>{heading}</Text>
          <Text style={styles.detailForm}>{detail}</Text>
        </View>
      );
    return (
      <View>
        <Text style={styles.detailForm}>{heading}</Text>
        <Text style={styles.detailForm}>{detail}</Text>
      </View>
    );
  };
  return (
    <Document>
      <Page
        size="A4"
        style={{
          backgroundColor: "#fff",
          padding: "15px 48px 55px 48px",
        }}
      >
        <View>
          <View style={styles.headingMain}>
            <Text>Vimal Kurien Sam</Text>
          </View>
          <View style={styles.marginTop20}>
            <Text style={styles.headingForm}>Resume Headline</Text>
            <Text style={styles.detailForm}>
              {lastEmployment.length
                ? lastEmployment[0]?.title
                : "No Employment Recorded"}
            </Text>
          </View>
        </View>
        <View style={styles.marginTop20}>
          <View>
            <Text style={styles.headingForm}>Qualification</Text>
            <Text style={styles.detailForm}>Diploma in civil engineering</Text>
            <Text style={styles.detailForm}>MIT college of engineering</Text>
            <Text style={styles.detailForm}>Pune University</Text>
            <Text style={styles.detailForm}>2013 full time</Text>
          </View>
        </View>
        <View style={styles.marginTop20}>
          <View>
            <Text style={styles.headingForm}>Board</Text>
            <Text style={styles.detailForm}>State</Text>
            <Text style={styles.detailForm}>2009</Text>
          </View>
        </View>
        <View style={styles.marginTop20}>
          <Text style={styles.headingForm}>Skills</Text>
          <View style={styles.horizontalAlign}>
            {get4[0].skill_list.split(",").map((val, idx) => (
              <View style={styles.boxSkill} key={idx}>
                <Text style={{ fontSize: "15px", color: "#535353" }}>
                  {val}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.marginTop20}>
          <Text style={styles.headingForm}>Employment Details</Text>
          {employmentSort.map((val, idx) => (
            <View key={idx} style={styles.marginTop20}>
              <Text style={styles.detailForm}>{val.title}</Text>
              <Text style={styles.detailForm}>{val.name}</Text>
              <Text style={styles.detailForm}>
                {JSON.parse(val.job_description)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.marginTop20}>
          <Text style={styles.headingForm}>Overseas opportunity</Text>
          <Text style={styles.detailForm}>
            {get6[0].overseas ? "Yes" : "No"}
          </Text>
        </View>

        <View style={styles.marginTop20}>
          <Text style={styles.headingForm}>Personal Information</Text>
          <View
            style={{ ...styles.horizontalPersonalInfo, ...styles.marginTop10 }}
          >
            {personalInfoView({
              heading: "Full Name",
              detail: get1[0].full_name,
            })}
            {personalInfoView({
              heading: "Hometown",
              detail: "dummy",
              right: true,
            })}
          </View>
          <View
            style={{ ...styles.horizontalPersonalInfo, ...styles.marginTop10 }}
          >
            {personalInfoView({
              heading: "Date of Birth",
              detail: moment(get1[0].dob).format("DD-MM-YYYY"),
            })}
            {personalInfoView({
              heading: "Permanent Address",
              detail: `${get1[0].per_house_no} ${get1[0].per_street_locality} ${get1[0].per_region} ${get1[0].per_state}`,
              right: true,
            })}
          </View>
          <View
            style={{ ...styles.horizontalPersonalInfo, ...styles.marginTop10 }}
          >
            {personalInfoView({ heading: "Gender", detail: get1[0].gender })}
            {personalInfoView({
              heading: "Pincode",
              detail: get1[0].per_pin,
              right: true,
            })}
          </View>
          <View
            style={{ ...styles.horizontalPersonalInfo, ...styles.marginTop10 }}
          >
            {personalInfoView({ heading: "Area Pin Code", detail: get1[0].pin })}
            {personalInfoView({
              heading: "Email",
              detail: get1[0].email,
              right: true,
            })}
          </View>
          <View
            style={{ ...styles.horizontalPersonalInfo, ...styles.marginTop10 }}
          >
            {personalInfoView({
              heading: "Marital Status",
              detail: get1[0].marital_status,
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFSaver;
