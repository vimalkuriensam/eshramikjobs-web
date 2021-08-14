import moment from "moment";
import React from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const JobListings = ({
  jobs = [],
  onHandleJobDetail,
  onHandleButtonDelete,
  onHandleButtonApply,
}) => {
  return (
    <div>
      {jobs.map(
        (
          {
            jobId,
            image,
            company_name,
            title,
            job_data,
            city,
            cr_date,
            saveId = null,
            ApplyId = null,
            saveJobId = null,
            applyJobId = null,
          },
          index
        ) => (
          <div
            data-aos="fade-right"
            className="row jobs"
            key={index}
            onClick={onHandleJobDetail.bind(this, jobId)}
          >
            <div className="col-25-of-10 u-text-center">
              <Image
                className={`jobs__imageContainer ${
                  !!image ? null : "jobs__noImageContainer"
                }`}
                name={image || "no-image-placeholder"}
              />
            </div>
            <div className="col-4-of-10">
              <Title className="u-margin-vertical-15" variant="pr-19-1">
                {company_name}
              </Title>
              <Text variant="pl-17-1">{title}</Text>
              <Text variant="pl-17-1" className="jobs__descriptionSmall">
                {job_data?.description}
              </Text>
              <div>
                <Text variant="pl-17-2">Experience: </Text>
                <Text variant="pl-17-1" className="u-margin-bottom-15">
                  &nbsp;{job_data?.experience?.min} to{" "}
                  {job_data?.experience?.max} years
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
              {saveJobId || applyJobId ? (
                <Button
                  variant="6"
                  content="Delete"
                  className="u-margin-top-50 u-margin-auto"
                  onButtonClick={onHandleButtonDelete.bind(this, {
                    saveId: saveJobId,
                    applyId: applyJobId,
                  })}
                  icon="Delete"
                />
              ) : ApplyId ? null : (
                <Button
                  variant="1-2"
                  className="jobs__apply u-opacity-80"
                  content="Apply"
                  onButtonClick={onHandleButtonApply.bind(this, jobId)}
                />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default JobListings;
