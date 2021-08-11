import React from "react";
import { connect } from "react-redux";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import { buyPlan, confirmOrder } from "../../../redux/actions/recruit.action";
import { RAZORPAY_CDN, RAZORPAY_LOGO } from "../data";

const PlanContainer = ({
  variant = "primary",
  headerContents,
  contents = [],
  dispatch,
}) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async () => {
    const res = await loadScript(RAZORPAY_CDN);
    if (!res) {
      alert("Razorpay integration failed");
      return;
    }
    const { id, currency, amount } = await dispatch(buyPlan());
    const options = {
      key: process.env.RAZORPAY_ID,
      amount,
      currency,
      name: "Eshramik",
      description: "15 day plan",
      image: RAZORPAY_LOGO,
      order_id: id,
      handler: async function (response) {
        const paymentResp = await dispatch(
          confirmOrder({ razorpay_payment_id: response?.razorpay_payment_id })
        );
        console.log(paymentResp);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1785a9",
      },
    };
    const razorPaymentObj = new window.Razorpay(options);
    razorPaymentObj.open();
  };
  return (
    <div className="u-margin-top-50 recruit__planRegion">
      <div className={`recruit__planHeader recruit__planHeader--${variant}`}>
        <div className="row">
          <div className="col-1-of-3">
            <Title variant="pr-21-1">{headerContents.column1}</Title>
          </div>
          <div className="col-1-of-3">
            <Text variant="pl-14-2">{headerContents.column2}</Text>
          </div>
          <div className="col-1-of-3">
            <Text variant="pr-18-2">{headerContents.column3}</Text>
          </div>
        </div>
      </div>
      {/*contents*/}
      <div className="a-row u-max-width-100">
        <div className="col-a-1-of-4 recruit__planContentLeft">
          <Title variant="pm-17-1">Database + job posting</Title>
        </div>
        <div className="col-a-3-of-4">
          {contents.map((content, index) => (
            <div className="a-row recruit__planContents" key={index}>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.time}</Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.resumes}</Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.price}</Text>
              </div>
              <div className="col-a-1-of-4">
                <span className="u-cursor-pointer" onClick={displayRazorPay}>
                  <Title variant="pr-15-3">Buy Now</Title>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect()(PlanContainer);
