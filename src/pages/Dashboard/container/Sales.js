import React, { useEffect } from "react";
import * as d3 from "d3";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import { connect } from "react-redux";
import { getRevenueDetails } from "../../../redux/actions/recruit.action";
import moment from "moment";

let dimensions = {
  width: 600,
  height: 485,
  margins: 50,
};
dimensions.ctrWidth = dimensions.width - dimensions.margins * 2;
dimensions.ctrHeight = dimensions.height - dimensions.margins * 2;

const data = [
  {
    paymentDate: "1630156956000",
    price: "1300",
  },
  {
    paymentDate: "1630070556000",
    price: "1500",
  },
  {
    paymentDate: "1629984156000",
    price: "1000",
  },
  {
    paymentDate: "1629985156000",
    price: "4000",
  },
  {
    paymentDate: "1629897756000",
    price: "2000",
  },
  {
    paymentDate: "1629897656000",
    price: "3000",
  },
  {
    paymentDate: "1629898756000",
    price: "500",
  },
  {
    paymentDate: "1629811356000",
    price: "1500",
  },
  {
    paymentDate: "1629724956000",
    price: "2000",
  },
  {
    paymentDate: "1629638556000",
    price: "1800",
  },
];

let updatedData = {};

data.forEach((val) => {
  if (isNaN(updatedData[moment(+val.paymentDate).format("MM-DD-YYYY")]))
    updatedData[moment(+val.paymentDate).format("MM-DD-YYYY")] = +val.price;
  else updatedData[moment(+val.paymentDate).format("MM-DD-YYYY")] += +val.price;
});

const updatedDataBin = Object.keys(updatedData).map((val) => ({
  date: val,
  price: updatedData[val],
}));

const xAccessor = (d) => new Date(d.date);

const xScale = d3
  .scaleTime()
  .domain(d3.extent(updatedDataBin, xAccessor))
  .range([0, dimensions.ctrWidth])
  .nice();

const yAccessor = (d) => d.price;

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(updatedDataBin, yAccessor)])
  .range([dimensions.ctrHeight, 0])
  .nice();

const chartInit = () => {
  const svg = d3
    .select("#sales-graph")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const ctr = svg
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margins}, ${dimensions.margins})`
    );
  ctr
    .selectAll("rect")
    .data(updatedDataBin)
    .join("rect")
    .attr("width", (d) => dimensions.ctrWidth / updatedDataBin.length - 10)
    .attr("height", (d) => dimensions.ctrHeight - yScale(yAccessor(d)))
    .attr("x", (d) => xScale(xAccessor(d)))
    .attr("y", (d) => yScale(yAccessor(d)))
    .attr("fill", "#1785A9");

  const defs = svg.append("defs");

  // create filter with id #drop-shadow
  // height=130% so that the shadow is not clipped
  const filter = defs
    .append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "120%");

  // SourceAlpha refers to opacity of graphic that this filter will be applied to
  // convolve that with a Gaussian with standard deviation 3 and store result
  // in blur
  filter
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 1)
    .attr("result", "blur");

  filter
    .append("feOffset")
    .attr("in", "blur")
    .attr("dx", 0)
    .attr("dy", 0.5)
    .attr("result", "offsetBlur");

  const feMerge = filter.append("feMerge");

  feMerge.append("feMergeNode").attr("in", "offsetBlur");
  feMerge.append("feMergeNode").attr("in", "SourceGraphic");

  const tooltip = ctr
    .append("g")
    .classed("dashboard__salesLabels", true)
    .attr("text-anchor", "middle")
    .selectAll("g")
    .data(updatedDataBin)
    .join("g");

  tooltip
    .append("rect")
    .attr("width", 34)
    .attr("height", 21)
    .attr("rx", 6)
    .attr("ry", 6)
    .classed("dashboard__salesLabelsRect", true)
    .attr("fill", "white")
    .style("filter", "url(#drop-shadow)")
    .attr(
      "x",
      (d) =>
        (xScale(xAccessor(d)) +
          (xScale(xAccessor(d)) +
            dimensions.ctrWidth / updatedDataBin.length -
            10)) /
          2 -
        15
    )
    .attr("y", (d) => yScale(yAccessor(d)) - 25);

  tooltip
    .append("text")
    .attr(
      "x",
      (d) =>
        (xScale(xAccessor(d)) +
          (xScale(xAccessor(d)) +
            dimensions.ctrWidth / updatedDataBin.length -
            10)) /
        2
    )
    .attr("y", (d) => yScale(yAccessor(d)) - 10)
    .text((d) => moment(d.date).format("dddd").slice(0, 3));

  const xAxis = d3
    .axisBottom(xScale)
    .ticks(7)
    .tickFormat((d) => moment(d).format("MMM DD"));

  const yAxis = d3
    .axisLeft(yScale)
    .ticks(5)
    .tickFormat((d) => `${+d / 1000}K`);

  const xAxisGroup = ctr
    .append("g")
    .classed("dashboard__salesMonths", true)
    .style("transform", `translateY(${dimensions.ctrHeight}px)`);

  const yAxisGroup = ctr.append("g").classed("dashboard__salesRevenue", true);

  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);
};

const Sales = ({ dispatch }) => {
  useEffect(() => {
    chartInit();
    // dispatch(getRevenueDetails());
  }, []);

  return (
    <div className="dashboard__tableContainer">
      <div className="dashboard__salesHeader">
        <div className="dashboard__salesTitle">
          <Title variant="pm-17-1">Sales</Title>
          <Title variant="pr-17-5">Revenue 48k</Title>
        </div>
        <div className="dashboard__salesCTA">
          <Text variant="pr-14-2">3 days</Text>
          <Text variant="pr-14-2">7 days</Text>
        </div>
      </div>
      <div id="sales-graph"></div>
    </div>
  );
};

export default connect()(Sales);
