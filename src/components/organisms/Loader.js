import React, { Fragment } from "react";
import { connect } from "react-redux";

const Loader = ({ load }) => {
  return <Fragment>{load && <div className="loader">Loading...</div>}</Fragment>;
};

const mapStateToProps = (state) => ({
  load: state.utils?.loaderState,
});

export default connect(mapStateToProps)(Loader);
