import React from "react";

import CategoryCard from "./CategoryCard";
import Title from "../../../components/atoms/Title";

import { CATEGORY_ITEMS } from "../data";

const Categories = () => {
  const rows = [...Array(Math.ceil(CATEGORY_ITEMS.length / 4))];
  const categoryRows = rows.map((row, index) =>
    CATEGORY_ITEMS.slice(index * 4, index * 4 + 4)
  );
  const categoryLists = categoryRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((category, idx) => (
        <div className="col-1-of-4" key={`${index}-${idx}`}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  ));
  return (
    <section className="section-home-categories">
      <Title variant="pr-30-1">Categories</Title>
      <div className="u-margin-top-45">{categoryLists}</div>
    </section>
  );
};

export default Categories;
