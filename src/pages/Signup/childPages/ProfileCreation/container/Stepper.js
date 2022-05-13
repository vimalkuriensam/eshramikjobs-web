import React from "react";
import { connect } from "react-redux";

import Icon from "../../../../../components/atoms/Icon";
import Text from "../../../../../components/atoms/Text";
import { funcMap } from "../../../../../utils/data";
import history from "../../../../../utils/history";

const Stepper = ({ step = 1, total = 1, dispatch }) => {
  const onHandlePage = async (val) => {
    await funcMap[(+step-1) + val](dispatch);
    history.push(`/register/profile/${+step + val}`);
  }
  return (
    <div className="authentication__stepBox">
      <div className="authentication__stepContainer">
        {step > 1 ? (
          <Icon onIconClick={onHandlePage.bind(this, -1)} name="ArrowLeft" />
        ) : (
          <Text className="u-margin-left-10">&nbsp;</Text>
        )}
        <div className="authentication__stepInfo">{step}</div>
        {step < total ? (
          <Icon onIconClick={onHandlePage.bind(this, 1)} name="ArrowRight" />
        ) : (
          <Text className="u-margin-right-10">&nbsp;</Text>
        )}
      </div>

      <Text variant="pl-18-1 u-margin-top-5">
        {step} of {total}
      </Text>
    </div>
  );
};

export default connect()(Stepper);
