import React from "react";

import Button from "../../components/atoms/Button";

const Home = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <Button content="Test" variant="1-1" />
      <Button content="Test" variant="1-2" />
      <div>
        <Button content="Test" variant="1-3" />
      </div>
      <div>
        <Button content="Test" variant="1-4" />
      </div>
      <div>
        <Button content="" icon="Search" variant="2" />
      </div>
      <div>
        <Button content="" icon="ArrowDown" variant="3" />
      </div>
      <div>
        <Button content="Click a photo" icon="Camera" variant="4" />
      </div>
    </div>
  );
};

export default Home;
