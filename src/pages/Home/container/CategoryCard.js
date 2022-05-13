import React from "react";

import Icon from "../../../components/atoms/Icon";
import Text from "../../../components/atoms/Text";

const CategoryCard = ({ category }) => {
  return (
    <div className="home__card">
      <Icon name={category.icon} />
      <Text variant="pl-16-1">{category.title}</Text>
    </div>
  );
};

export default CategoryCard;
