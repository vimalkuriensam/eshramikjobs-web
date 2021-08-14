import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

import { removeMessage } from "../../redux/actions/utils.action";
import Icon from "../atoms/Icon";

import Text from "../atoms/Text";

const Message = ({ messages, dispatch }) => {
  // useEffect(() => {
  //   if (messages.length) {
  //     setTimeout(() => {
  //       dispatch(removeMessage());
  //     }, 2000);
  //   }
  // }, [messages]);

  const getIcon = (type = null) => {
    switch (type) {
      case "success":
        return "Tick";
      case "error":
        return "Error";
      case "alert":
        return "Alert";
      case "info":
        return "Info";
      default:
        return "Tick";
    }
  };

  return (
    <Fragment>
      {!!messages.length && (
        <div className="message">
          {messages.map((info, idx) => (
            <div
              className={`message__container message__${info.type}`}
              key={idx}
            >
              <div className="message__contents">
                <div>
                  <Icon
                    className={`message__icon--${getIcon(info.type)}`}
                    name={getIcon(info.type)}
                  />
                </div>
                <Text variant="r-14-400-1">{info.content}</Text>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  messages: state.utils.messages,
});

export default connect(mapStateToProps)(Message);
