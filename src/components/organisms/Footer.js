import React, { useEffect, useState } from "react";

import Text from "../atoms/Text";
import Title from "../atoms/Title";
import {
  FOOTER_MAIN_CONTENTS,
  funcMap,
  USER_ROUTE_TYPES,
} from "../../utils/data";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import BlacklistComponent from "../../hoc/BlacklistComponent";
import { withRouter } from "react-router-dom";
import useWindowSize from "../../hooks/WindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    if (width < 530) setColumns(1);
    else if (width < 950) setColumns(2);
    else setColumns(3);
  }, [width]);
  const onHandleFooterAction = (val) => funcMap[val]();
  return (
    <div className="footer">
      <div className="row">
        <div className="col-3-of-4">
          {FOOTER_MAIN_CONTENTS.rows.map((rows, index) => (
            <div className={`${columns > 1 ? "row" : null}`} key={index}>
              {rows.columns.map((column, idx) => (
                <div
                  key={idx}
                  className={`col-1-of-${columns} ${
                    columns == 1 ? "u-margin-top-20" : null
                  } u-text-center`}
                  onClick={onHandleFooterAction.bind(this, column.to)}
                >
                  <Text variant="pr-18-1 footer__linkContent">
                    {column.title}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="col-1-of-4 u-text-center">
          <Title variant="pr-28-1" className="footer__title">
            Eshramik on Mobile
          </Title>
          <Button
            variant="2"
            icon="GooglePlay"
            content="Google play"
            className="footer__cta"
          />
          <Button
            variant="2"
            icon="Apple"
            content="App store"
            className="footer__cta"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  BlacklistComponent(Footer)([
    ...USER_ROUTE_TYPES.admin,
    ...USER_ROUTE_TYPES.recruiter,
    ...USER_ROUTE_TYPES.default,
    "/create",
  ])
);
