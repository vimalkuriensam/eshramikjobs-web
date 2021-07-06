import React, { useState } from "react";

import TextArea from "../../components/atoms/TextArea";
import RadioGroup from "../../components/molecules/RadioGroup";

const Home = () => {
  const [gender, setGender] = useState("male");
  return (
    <div style={{ padding: "3rem" }}>
      <TextArea />
      <RadioGroup
        value={gender}
        contents={[
          {
            id: "male",
            name: "gender",
            title: "Male",
          },
          {
            id: "female",
            name: "gender",
            title: "Female",
          },
        ]}
        onHandleRadioClick={({ target }) => setGender(target.value)}
      />
    </div>
  );
};

export default Home;
