import React, { useCallback, useEffect } from "react";
import * as d3 from "d3";

import Text from "../atoms/Text";
import Title from "../atoms/Title";

const SubscriptionBox = ({
  title,
  value,
  variant,
  id,
  onHandleView,
  type = null,
}) => {
  const PIE_VAL = {
    height: !type ? 88 : 150,
    width: !type ? 88 : 150,
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
  // useEffect(() => {
    const data = [
      { value, name: "completed" },
      { value: 100 - value, name: "incomplete" },
    ];
    const subscriptionPie = d3.pie().value((d) => d.value);
    const slices = subscriptionPie(data);
    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", PIE_VAL.width)
      .attr("height", PIE_VAL.height);
    const radius = Math.min(PIE_VAL.width, PIE_VAL.height) / 2;

    const g = svg
      .append("g")
      .attr("class", `chart-group-${id}`)
      .attr(
        "transform",
        `translate(${PIE_VAL.width / 2},${PIE_VAL.height / 2})`
      );

    const arc = d3
      .arc()
      .innerRadius(`${!type ? radius - 10 : radius - 15}`)
      .outerRadius(radius);
    const arcs = g
      .selectAll("path")
      .data(slices)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => PIE_COLORS[variant][VAL_ENUM[i]]);
  // }, []);

  return (
    <div className="dashboard__subscriptionBox">
      <div className="a-row">
        <div className="col-a-35-of-50">
          <div>
            <Title variant={`${!type ? "pr-17-3" : "pr-30-1"}`}>{title}</Title>
          </div>
          <div>
            <Title variant={`${!type ? "psm-18-1" : "psm-30-1"}`}>
              {value}
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
                  {value}%
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
