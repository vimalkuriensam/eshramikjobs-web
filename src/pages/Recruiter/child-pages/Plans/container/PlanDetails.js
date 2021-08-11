import React from "react";
import Image from "../../../../../components/atoms/Image";
import Text from "../../../../../components/atoms/Text";
import Title from "../../../../../components/atoms/Title";

const PlanDetails = () => {
  return (
    <div className="recruit__planContainer">
      <Image
        name="companies-enrolled/pic3"
        className="recruit__planContainer--image"
      />
      <div className="row">
        <Text variant="pl-17-1">Nyati constructions</Text>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Title variant="pr-17-3">Plan</Title> &nbsp;{" "}
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-17-1">District/UT (single login)</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Title variant="pr-17-3">Days</Title> &nbsp;{" "}
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-17-1">15 days</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Title variant="pr-17-3">DB download</Title> &nbsp;{" "}
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-17-1">200/5</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Title variant="pr-17-3">Prize/GST</Title> &nbsp;{" "}
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-17-1">Free</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <Title variant="pr-17-3">Plan expired date</Title> &nbsp;{" "}
        </div>
        <div className="col-1-of-2">
          <Text variant="pl-17-1">20/08/2021</Text>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;