import React, { useEffect } from "react";
import * as d3 from "d3";

import Text from "../atoms/Text";
import Title from "../atoms/Title";

const PIE_COLORS = {
  primary: {
    light: "#19b6e9",
    dark: "#0088b5",
  },
  secondary: { light: "#fcc143", dark: "#dba127" },
  tertiary: { light: "#17b495", dark: "#126353" },
};

const VAL_ENUM = { 0: "dark", 1: "light" };

const chartInit = (id, value, type, variant) => {
  const PIE_VAL = {
    height: !type ? 88 : 150,
    width: !type ? 88 : 150,
  };
  const data = [
    { value, name: "completed" },
    { value: 100 - value, name: "incomplete" },
  ];

  const subscriptionPie = d3.pie().value((d) => d.value);
  const radius = Math.min(PIE_VAL.width, PIE_VAL.height) / 2;

  let svg, g, arc;
  svg = d3
    .select(`#${id}`)
    .append("svg")
    .attr("width", PIE_VAL.width)
    .attr("height", PIE_VAL.height);

  g = svg
    .append("g")
    .attr("class", `chart-group-${id}`)
    .attr("transform", `translate(${PIE_VAL.width / 2},${PIE_VAL.height / 2})`);
  let slices = subscriptionPie(data);
  arc = d3
    .arc()
    .innerRadius(`${!type ? radius - 10 : radius - 15}`)
    .outerRadius(radius);
  g.selectAll("path")
    .data(slices)
    .join("path")
    .transition()
    .attr("d", arc)
    .attr("fill", (d, i) => PIE_COLORS[variant][VAL_ENUM[i]]);

  arc = d3
    .arc()
    .innerRadius(`${!type ? radius - 10 : radius - 15}`)
    .outerRadius(radius);
  g.selectAll("path")
    .data(slices)
    .join("path")
    .transition()
    .attr("d", arc)
    .attr("fill", (d, i) => PIE_COLORS[variant][VAL_ENUM[i]]);
};

const SubscriptionBox = ({
  title,
  value = 0,
  variant,
  id,
  onHandleView,
  type = null,
}) => {
  useEffect(() => {
    chartInit(id, value, type, variant);
  }, []);

  return (
    <div className="dashboard__subscriptionBox">
      <div className="a-row">
        <div className="col-a-35-of-50">
          <div>
            <Title variant={`${!type ? "pr-17-3" : "pr-30-1"}`}>{title}</Title>
          </div>
          <div>
            <Title variant={`${!type ? "psm-18-1" : "psm-30-1"}`}>
              {value.toFixed(2)}
            </Title>
          </div>
        </div>
        <div className="col-a-15-of-50 u-text-center">
          <span>
            {id && (
              <div className="u-position-relative" id={id}>
                <Title
                  variant={`${!type ? "psm-18-1" : "psm-30-1"}`}
                  className="dashboard__subscriptionValue"
                  style={{ color: PIE_COLORS[variant]["light"] }}
                >
                  {value.toFixed(2)}%
                </Title>
              </div>
            )}
            {!type && (
              <span onClick={onHandleView} className="u-cursor-pointer">
                <Text variant="pr-14-2 u-margin-top-20">View all</Text>
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
