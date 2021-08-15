import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import { EventSourcePolyfill } from "event-source-polyfill";

const EventCaptureTut = ({ token }) => {
  //   constructor(props) {
  // }
  //   const es = new EventSource(`${process.env.BASE_URL}/notifications/get`);
  const es = new EventSourcePolyfill(
    `${process.env.BASE_URL}/notification/get`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  es.onmessage = (e) => {
    console.log("data stream");
    console.log(e);
  };
  es.onerror = (e) => console.log(e);
  return <Fragment>&nbsp;</Fragment>;
};

const mapStateToProps = (state) => ({
  token: state.auth.accessToken,
});

export default connect(mapStateToProps)(EventCaptureTut);
