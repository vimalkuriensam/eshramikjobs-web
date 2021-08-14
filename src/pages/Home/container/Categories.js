import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import Title from "../../../components/atoms/Title";

import { CATEGORY_ITEMS } from "../data";
import useWindowSize from "../../../hooks/WindowSize";

const Categories = () => {
  const { width } = useWindowSize();
  const [columns, setColumns] = useState(4);
  useEffect(() => {
    if (width < 660) setColumns(1);
    else if (width < 840) setColumns(2);
    else if (width < 1075) setColumns(3);
    else setColumns(4);
  }, [width]);
  const rows = [...Array(Math.ceil(CATEGORY_ITEMS.length / columns))];
  const categoryRows = rows.map((row, index) =>
    CATEGORY_ITEMS.slice(index * columns, index * columns + columns)
  );
  const categoryLists = categoryRows.map((row, index) => (
    <div className="row" key={index}>
      {row.map((category, idx) => (
        <div
          className={`col-1-of-${columns}`}
          data-aos="zoom-out-up"
          data-aos-duration="470"
          key={`${index}-${idx}`}
        >
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
