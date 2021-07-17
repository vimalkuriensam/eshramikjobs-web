import React from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const JobListings = ({ jobs = [] }) => {
  return (
    <div>
      {jobs.map(
        (
          {
            image,
            title,
            degree,
            description,
            minExperience,
            maxExperience,
            location,
            date,
          },
          index
        ) => (
          <div data-aos="fade-right" className="row jobs" key={index}>
            <div className="col-25-of-10 u-text-center">
              <Image className="jobs__imageContainer" name={image} />
            </div>
            <div className="col-4-of-10">
              <Title className="u-margin-vertical-15" variant="pr-19-1">
                {title}
              </Title>
              <Text variant="pl-16-1">{degree}</Text>
              <Text variant="pl-16-1">{description}</Text>
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
                <Text variant="pl-16-1">&nbsp;2 hours before</Text>
              </div>
              <div>
                <Text variant="pl-17-2">Location: </Text>
                <Text variant="pl-16-1">&nbsp;{location}</Text>
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
