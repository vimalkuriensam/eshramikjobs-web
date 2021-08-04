import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { loginState } from "../../redux/actions/utils.action";
import { funcMap } from "../../utils/data";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const JobListings = ({ jobs = [], onHandleJobDetail }) => {
  return (
    <div>
      {jobs.map(
        (
          {
            id,
            image,
            title,
            degree,
            description,
            minExperience,
            maxExperience,
            city,
            cr_date,
          },
          index
        ) => (
          <div
            data-aos="fade-right"
            className="row jobs"
            key={index}
            onClick={onHandleJobDetail.bind(this, id)}
          >
            <div className="col-25-of-10 u-text-center">
              <Image className="jobs__imageContainer" name={image} />
            </div>
            <div className="col-4-of-10">
              <Title className="u-margin-vertical-15" variant="pr-19-1">
                {title}
              </Title>
              <Text variant="pl-16-1">{degree}</Text>
              <Text variant="pl-16-1" className="jobs__descriptionSmall">
                {description}
              </Text>
              <div>
                <Text variant="pl-17-2">Experience: </Text>
                <Text variant="pl-16-1" className="u-margin-bottom-15">
                  &nbsp;{minExperience} to {maxExperience} years
                </Text>
              </div>
            </div>
            <div className="col-35-of-10 jobs__cta">
              <div>
                <Text variant="pl-17-2">Posted: </Text>
                <Text variant="pl-16-1">
                  &nbsp;{moment(+cr_date).fromNow()}
                </Text>
              </div>
              <div>
                <Text variant="pl-17-2">Location: </Text>
                <Text variant="pl-16-1">&nbsp;{city}</Text>
              </div>
              <Button
                variant="1-2"
                className="jobs__apply u-opacity-80"
                content="Apply"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default JobListings;
