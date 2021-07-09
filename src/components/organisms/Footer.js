import React from "react";

import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { FOOTER_MAIN_CONTENTS } from "../../utils/data";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-3-of-4">
          {FOOTER_MAIN_CONTENTS.rows.map((rows, index) => (
            <div className="row" key={index}>
              {rows.columns.map((column, idx) => (
                <div
                  key={idx}
                  className={`col-1-of-${rows.columns.length} u-text-center`}
                >
                  <Text variant="pr-18-1 footer__linkContent">
                    {column.title}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="col-1-of-4">
          <Title variant="pr-28-1" className="footer__title">Eshramik on Mobile</Title>
          <Icon name="GooglePlay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
