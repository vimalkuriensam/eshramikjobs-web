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
import { saveAs } from "file-saver";

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

const PDFSaver = () => (
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
          <Text style={styles.detailForm}>Resume Headline</Text>
        </View>
        <View style={styles.marginTop10}>
          <Text style={styles.headingForm}>Resume Headline</Text>
          <Text style={styles.detailForm}>Resume Headline</Text>
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
          {["React", "Docker", "Nodejs", "jenkins", "flask", "cicd"].map(
            (val, idx) => (
              <View style={styles.boxSkill} key={idx}>
                <Text style={{ fontSize: "15px", color: "#535353" }}>
                  {val}
                </Text>
              </View>
            )
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFSaver;
