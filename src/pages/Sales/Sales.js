import React from "react";
import { connect } from "react-redux";

import SalesGraph from "./container/SalesGraph";
import SalesTable from "./container/SalesTable";

const Sales = ({ sales }) => {
  return (
    <section className="section-dashboard">
      <SalesTable sales={sales} />
      <SalesGraph sales={sales} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  sales: state.admin.sales,
});

export default connect(mapStateToProps)(Sales);
