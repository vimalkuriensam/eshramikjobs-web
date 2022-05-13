export const PROFILE_COMPONENTS = {
  1: {
    component: "PersonalInformation",
  },
  2: {
    component: "Qualification",
  },
  3: {
    component: "Profession",
  },
  4: {
    component: "Skills",
  },
  5: {
    component: "EmployeeDetails",
  },
  6: {
    component: "Overseas",
  },
  7: {
    component: "Upload",
  },
  8: {
    component: "Resume",
  },
};

export const QUALIFICATION_SCHOOL = {
  title: "School",
  contents: [
    { id: "na", title: "NA", name: "school" },
    { id: "5g", title: "5th grade", name: "school" },
    { id: "8g", title: "8th grade", name: "school" },
    { id: "highschool", title: "High School", name: "school" },
    {
      id: "seniorsecondary",
      title: "Senior Secondary",
      name: "school",
    },
  ],
};

export const QUALIFICATION_SPECIALIZATION = {
  title: "Specialization/field of study",
  contents: [
    { id: "iti", title: "ITI", name: "field" },
    { id: "nctvt", title: "NCTVT", name: "field" },
    { id: "certification", title: "Certification", name: "field" },
    { id: "diploma", title: "Diploma", name: "field" },
    { id: "others", title: "Others", name: "field" },
  ],
};

export const SKILLS_CONTENT = {
  radioContent: [
    { id: "highlyskilled", title: "Highly skilled", name: "skill" },
    { id: "semiskilled", title: "Semi skilled", name: "skill" },
    { id: "unskilled", title: "Unskilled", name: "skill" },
  ],
};

export const OVERSEAS_OPPORTUNITY = {
  title: "Overseas opportunity",
  overseasRadio: {
    title: "Are you interested in overseas opportunity",
    contents: [
      { id: "true", title: "Yes", name: "overseas" },
      { id: "false", title: "No", name: "overseas" },
    ],
  },
  passport: {
    title: "Do you have a valid Indian passport?",
    contents: [
      { id: "true", title: "Yes", name: "passport" },
      { id: "false", title: "No", name: "passport" },
    ],
  },
};

export const RESUME_UPLOAD = {
  title: "Upload photo",
  resumeCopy: {
    title: "Do you need a copy of Resume?",
    contents: [
      { id: "true", title: "Yes", name: "resume" },
      { id: "false", title: "No", name: "resume" },
    ],
  },
};
