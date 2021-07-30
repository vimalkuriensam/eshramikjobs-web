import React, { useEffect } from "react";
import * as d3 from "d3";

import Text from "../atoms/Text";
import Title from "../atoms/Title";

const SubscriptionBox = ({ title, value, variant, id }) => {
  const PIE_VAL = {
    height: 88,
    width: 88,
  };

  const PIE_COLORS = {
    primary: {
      light: "#19b6e9",
      dark: "#0088b5",
    },
    secondary: { light: "#fcc143", dark: "#dba127" },
    tertiary: { light: "#17b495", dark: "#126353" },
  };

  const VAL_ENUM = { 0: "dark", 1: "light" };
  const pie = d3.pie().value((d) => d.value);

  const svg = d3
    .select(`#${id}`)
    .append("svg")
    .attr("width", PIE_VAL.width)
    .attr("height", PIE_VAL.height);
  const radius = Math.min(PIE_VAL.width, PIE_VAL.height) / 2;

  const g = svg
    .append("g")
    .attr("class", `chart-group-${id}`)
    .attr("transform", `translate(${PIE_VAL.width / 2},${PIE_VAL.height / 2})`);
  const data = [
    { value: value, name: "completed" },
    { value: 100 - value, name: "incomplete" },
  ];

  const arc = d3
    .arc()
    .innerRadius(radius - 10)
    .outerRadius(radius);
  const arcs = g
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc")
    .append("path")
    .attr("fill", (d, i) => PIE_COLORS[variant][VAL_ENUM[i]])
    .attr("d", arc);

  return (
    <div className="dashboard__subscriptionBox">
      <div className="a-row">
        <div className="col-a-35-of-50">
          <div>
            <Title variant="pr-17-3">{title}</Title>
          </div>
          <div>
            <Title variant="psm-18-1">{value}</Title>
          </div>
        </div>
        <div className="col-a-15-of-50 u-text-center">
          <span>
            {id && (
              <div className="u-position-relative" id={id}>
                <Title
                  variant="psm-18-1"
                  className="dashboard__subscriptionValue"
                  style={{ color: PIE_COLORS[variant]["light"] }}
                >
                  {value}%
                </Title>
              </div>
            )}
            <Text variant="pr-14-2 u-margin-top-20">View all</Text>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
