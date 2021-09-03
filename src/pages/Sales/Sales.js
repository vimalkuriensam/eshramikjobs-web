import moment from "moment";
import React from "react";
import { connect } from "react-redux";

import Text from "../../components/atoms/Text";
import Title from "../../components/atoms/Title";
import BarGraph from "../../components/molecules/BarGraph";

const Sales = ({ sales }) => {
  const revenue = sales.reduce((a, b) => a + +b.price, 0);

  return (
    <section className="section-dashboard">
      <div className="dashboard__tableContainer" style={{ width: "70%" }}>
        <div className="dashboard__salesHeader">
          <div className="dashboard__salesTitle">
            <Title variant="pm-17-1">Sales</Title>
            <Title variant="pr-17-5">Revenue {revenue / 1000}K</Title>
          </div>
          <div className="dashboard__salesCTA">
            <Text variant="pr-14-2">3 days</Text>
            <Text variant="pr-14-2">7 days</Text>
          </div>
        </div>
        {sales && <BarGraph id="sales-bar-graph" data={sales} />}
      </div>
      <div className="dashboard__tableContainer u-margin-top-40">
        <div className="a-row">
          <div className="col-a-1-of-3 u-text-center">
            <Title variant="pr-20-2">Date</Title>
          </div>
          <div className="col-a-1-of-3 u-text-center">
            <Title variant="pr-20-2">Day</Title>
          </div>
          <div className="col-a-1-of-3 u-text-center">
            <Title variant="pr-20-2">Revenue</Title>
          </div>
        </div>
        {sales.map((val, index) => (
          <div
            className={`a-row table__rowContent table__rowContent--${
              index % 2 == 0 ? "dark" : "light"
            }`}
            key={index}
          >
            <div className="col-a-1-of-3 u-text-center">
              <Text variant="pl-17-1">{val.date}</Text>
            </div>
            <div className="col-a-1-of-3 u-text-center">
              <Text variant="pl-17-1">{moment(val.date).format("dddd")}</Text>
            </div>
            <div className="col-a-1-of-3 u-text-center">
              <Text variant="pl-17-1">{val.price}</Text>
            </div>
          </div>
        ))}
        {
          <div className="a-row">
            <div className="col-a-1-of-3 u-text-center">&nbsp;</div>
            <div className="col-a-1-of-3 u-text-center">&nbsp;</div>
            <div className="col-a-1-of-3 u-text-center">
              <Title variant="pr-17-5">
                Total {sales.reduce((a, b) => a + +b.price, 0)}
              </Title>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  sales: state.admin.sales,
});

export default connect(mapStateToProps)(Sales);
