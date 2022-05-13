import React from "react";

import Title from "../../../../../components/atoms/Title";
import FormInput from "../../../../../components/molecules/FormInput";
import FormDropdown from "../../../../../components/molecules/FormDropdown";
import Button from "../../../../../components/atoms/Button";
import FormCalendar from "../../../../../components/molecules/FormCalendar";
import Dropdown from "../../../../../components/atoms/Dropdown";
import Divider from "../../../../../components/atoms/Divider";
import Icon from "../../../../../components/atoms/Icon";
import { connect } from "react-redux";
import moment from "moment";
import { getDistrict } from "../../../../../redux/actions/profile.actions";

const EmployeeDetails = ({
  info,
  onAddExperience,
  onDeleteExperience,
  onHandleEmployeeDetails,
  onHandleSave,
  states,
  jobs,
  districts = [],
  dispatch,
}) => {
  const statesList = states.map((st) => st.state);
  const districtList = districts.map((dist) => dist.district);
  const jobList = jobs.map((job) => job.name);
  return (
    <div>
      <Title variant="pr-24-1">5. Employeement details</Title>
      {info.map((val, index) => {
        const description = val.description;
        const parsedDescription = description ? JSON.parse(description) : "";
        return (
          <div className="row profile__detailsContainer" key={index}>
            {index > 0 && (
              <div>
                <Divider />
                <div className="row">
                  <div className="col-1-of-2">&nbsp;</div>
                  <div className="col-1-of-2 authentication__deleteContainer">
                    <Icon
                      name="Delete"
                      className="authentication__delete"
                      onIconClick={onDeleteExperience.bind(this, index)}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="col-1-of-2">
              <div className="row">
                <FormInput
                  onHandleText={onHandleEmployeeDetails.bind(
                    this,
                    "name",
                    index
                  )}
                  title="Name of Organization/Company"
                  placeholder=""
                  variant="1"
                />
              </div>
              <div className="row">
                <FormCalendar
                  value={moment(info[index].startDate).valueOf()}
                  onHandleCalendar={({ target }) => {
                    const date = moment(target.value).format("yyyy-MM-DD");
                    onHandleEmployeeDetails("startDate", index, {
                      target: { value: date },
                    });
                  }}
                  title="Start Date"
                />
              </div>
              <div className="row">
                <FormCalendar
                  value={moment(info[index].endDate).valueOf()}
                  onHandleCalendar={({ target }) => {
                    const date = moment(target.value).format("yyyy-MM-DD");
                    onHandleEmployeeDetails("endDate", index, {
                      target: { value: date },
                    });
                  }}
                  title="End Date"
                />
              </div>
              <div className="row">
                <FormDropdown
                  value={info[index].title}
                  onHandleDropdownValue={onHandleEmployeeDetails.bind(
                    this,
                    "title",
                    index
                  )}
                  title="Job title"
                  contents={jobList}
                />
              </div>
            </div>

            <div className="col-1-of-2">
              <div className="row">
                <FormDropdown
                  value={info[index].state}
                  onHandleDropdownValue={(event) => {
                    dispatch(getDistrict({ state: event.target.value }));
                    onHandleEmployeeDetails("state", index, event);
                  }}
                  title="Job location"
                  contents={statesList}
                />
              </div>
              <div className="row">
                <Dropdown
                  value={info[index].city}
                  onHandleDropdownValue={onHandleEmployeeDetails.bind(
                    this,
                    "city",
                    index
                  )}
                  contents={districtList}
                />
              </div>
              <div className="row">
                <FormInput
                  value={info[index].salary}
                  onHandleText={onHandleEmployeeDetails.bind(
                    this,
                    "salary",
                    index
                  )}
                  title="Last drawn salary"
                  variant="1"
                  placeholder=""
                />
              </div>
              <div className="row">
                <FormInput
                  // value={info[index].description}
                  // onHandleText={onHandleEmployeeDetails.bind(
                  //   this,
                  //   "description",
                  //   index
                  // )}
                  value={parsedDescription}
                  onHandleText={({ target }) => {
                    const { value } = target;
                    const stringifiedVal = JSON.stringify(value);
                    onHandleEmployeeDetails("description", index, {
                      target: { value: stringifiedVal },
                    });
                  }}
                  type="textarea"
                  title="Job description"
                  listings={false}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="row">
        <div className="col-1-of-2">&nbsp;</div>
        <div className="col-1-of-2">
          <div className="row">
            <Button
              onButtonClick={onAddExperience}
              content="Add more experience +"
              variant="5"
            />
          </div>
          <div className="row">
            <Button onButtonClick={onHandleSave} content="next" variant="1-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  states: state.profile.addressState,
  districts: state.profile.addressDistrict,
  jobs: [...state.profile.technical, ...state.profile.nonTechnical],
});

export default connect(mapStateToProps)(EmployeeDetails);
