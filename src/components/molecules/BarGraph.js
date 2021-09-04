import React, { useEffect } from "react";
import * as d3 from "d3";

import Text from "../atoms/Text";
import moment from "moment";

let dimensions = {
  width: 600,
  height: 485,
  margins: 50,
};
dimensions.ctrWidth = dimensions.width - dimensions.margins * 2;
dimensions.ctrHeight = dimensions.height - dimensions.margins * 2;

const chartInit = (sales, id) => {
  const xAccessor = (d) => new Date(d.date);

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(sales, xAccessor))
    .range([0, dimensions.ctrWidth])
    .nice();

  const yAccessor = (d) => +d.price;

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(sales, yAccessor)])
    .range([dimensions.ctrHeight, 0])
    .nice();
  const svg = d3
    .select(`#${id}`)
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
    .data(sales)
    .join("rect")
    .attr("width", (d) => dimensions.ctrWidth / sales.length - 10)
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
    .data(sales)
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
          (xScale(xAccessor(d)) + dimensions.ctrWidth / sales.length - 10)) /
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
          (xScale(xAccessor(d)) + dimensions.ctrWidth / sales.length - 10)) /
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

const BarGraph = ({ id, data = [] }) => {
  useEffect(() => {
    if (id) chartInit(data, id);
  }, []);
  return id ? (
    <div id={id}></div>
  ) : (
    <Text>Chart renderer needs a unique id to proceed.</Text>
  );
};

export default BarGraph;
