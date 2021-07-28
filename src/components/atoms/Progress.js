import React, { useEffect } from "react";
import Text from "./Text";

const Progress = ({ value = 0, className }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--set-progress", `${value}%`);
  }, []);
  return (
    <div className={`form__progress ${className}`}>
      <div
        className="form__progress--label"
        style={{ right: `${100 - +value}%` }}
      >
        <Text variant="pl-12-2">{value}%</Text>
        <div className="form__progress--pointer"></div>
      </div>
    </div>
  );
};

export default Progress;
