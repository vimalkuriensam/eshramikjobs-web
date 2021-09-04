import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Text from "../../../components/atoms/Text";
import Title from "../../../components/atoms/Title";
import { setVerification } from "../../../redux/actions/authentication.action";
import { buyPlan, confirmOrder } from "../../../redux/actions/recruit.action";
import { userType } from "../../../utils/data";
import history from "../../../utils/history";
import { RAZORPAY_CDN, RAZORPAY_LOGO } from "../data";
import Popup from "../../../components/molecules/Popup";
import Button from "../../../components/atoms/Button";

const PlanContainer = ({
  variant = "primary",
  headerContents,
  contents = [],
  dispatch,
  token,
}) => {
  const [planPopup, setPlanPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planError, setPlanError] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async (planId) => {
    const { id, currency, amount } = await dispatch(buyPlan({ planId }));
    if (id !== -1) {
      const res = await loadScript(RAZORPAY_CDN);
      if (!res) {
        alert("Razorpay integration failed");
        return;
      }
      const options = {
        key: process.env.RAZORPAY_ID,
        amount,
        currency,
        name: "Eshramik",
        description: "15 day plan",
        image: RAZORPAY_LOGO,
        order_id: id,
        handler: async function (response) {
          const paymentResp = await dispatch(confirmOrder(response));
          if (paymentResp) {
            console.log(paymentResp);
            dispatch(setVerification({ id: 2 }));
            history.push("/");
          }
        },
        prefill: {
          name: "",
          email: userType(token)?.email || "",
          contact: userType(token)?.user || "",
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
      razorPaymentObj.on("payment.failed", function (response) {});
    } else {
      dispatch(setVerification({ id: 2 }));
      history.push("/");
    }
  };

  const onSetPlanPopup = ({ id = null } = {}) => {
    setPlanError(false);
    if (id) {
      const plan = contents.find((content) => content.id === id);
      if (plan) {
        setSelectedPlan(plan);
        setPlanPopup((prevState) => !prevState);
      } else setPlanError(true);
    } else setPlanPopup((prevState) => !prevState);
  };
  return (
    <div className="u-margin-top-50 recruit__planRegion">
      {planPopup && (
        <Popup transition={{ horizontal: "top" }} onClosePopup={onSetPlanPopup}>
          <div className="recruit__popupContainer">
            {+selectedPlan.price ? (
              <Text variant="pr-18-1" className="u-text-justify">
                You have selected{" "}
                <Text variant="pl-18-1">{selectedPlan.name}</Text> region plan
                worth <Text variant="pl-18-1">Rs {selectedPlan.price}</Text> and
                can view <Text variant="pl-18-1">{selectedPlan.resumes}</Text>{" "}
                resumes until{" "}
                <Text variant="pl-18-1">
                  {moment(
                    moment().valueOf() + +selectedPlan.time * 1000
                  ).format("DD-MM-YYYY")}
                </Text>
                . Click proceed to continue with payment.
              </Text>
            ) : (
              <Text variant="pr-18-1" className="u-text-justify">
                This is a free plan and can only be selected once. This plan
                enables the the user to opt for{" "}
                <Text variant="pl-18-1">{selectedPlan.name}</Text> region plan
                and can view{" "}
                <Text variant="pl-18-1">{selectedPlan.resumes}</Text> resumes{" "}
                until{" "}
                <Text variant="pl-18-1">
                  {moment(
                    moment().valueOf() + +selectedPlan.time * 1000
                  ).format("DD-MM-YYYY")}
                </Text>
                . Click proceed to select this plan.
              </Text>
            )}
            <div className="recruit__popupCTA">
              <Button
                content="Cancel"
                variant="1-5"
                onButtonClick={onSetPlanPopup}
              />
              <Button
                content="Proceed"
                variant="1-2"
                onButtonClick={displayRazorPay.bind(this, selectedPlan.id)}
              />
            </div>
          </div>
        </Popup>
      )}
      {planError && (
        <Popup transition={{ horizontal: "top" }} onClosePopup={onSetPlanPopup}>
          <div className="recruit__popupContainer">
            <Text variant="pr-18-1" className="u-text-justify">
              This plan doesn't exist. Choose another plan.
            </Text>
          </div>
        </Popup>
      )}
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
                <Text variant="pl-18-2">
                  {moment(moment().valueOf() + +content.time * 1000)
                    .fromNow()
                    .replace("in a", "1 ")
                    .replace("in", "")}
                </Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">{content.resumes}</Text>
              </div>
              <div className="col-a-1-of-4">
                <Text variant="pl-18-2">
                  {content.price == +0 ? "Free" : content.price}
                </Text>
              </div>
              <div className="col-a-1-of-4">
                <span
                  className="u-cursor-pointer"
                  onClick={onSetPlanPopup.bind(this, { id: content.id })}
                >
                  {/*onClick={displayRazorPay.bind(this, content.id)}*/}
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

const mapStateToProps = (state) => ({
  token: state.auth.accessToken,
});

export default connect(mapStateToProps)(PlanContainer);
