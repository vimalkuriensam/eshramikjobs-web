import React from "react";
import Image from "../atoms/Image";

const CompanyListings = ({ companies = [] }) => {
  const rows = [...Array(Math.ceil(companies.length / 2))];
  const companyRows = rows.map((row, index) =>
    companies.slice(index * 2, index * 2 + 2)
  );
  const companyLists = companyRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((image, idx) => (
        <div className="col-1-of-2" key={`${index}-${idx}`}>
          <Image className="jobs__companyLogo" name={image} type="binary" />
        </div>
      ))}
    </div>
  ));
  return (
    <div className="jobs__companies" data-aos="fade-left">
      {companyLists}
    </div>
  );
};

export default CompanyListings;
