import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ total = 10, pagePerView = 5 }) => {
  return (
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="pagination__pages"
      activeClassName="pagination__pages--active"
      pageRangeDisplayed={5}
      marginPagesDisplayed={5}
      pageCount={10}
      previousLabel="Back"
      previousClassName="pagination__pages--action"
      nextLabel="Next"
      nextClassName="pagination__pages--action"
      initialPage={0}
      onPageChange={(e) => {
        console.log(e, 'clicked');
      }}
    />
  );
};

export default Pagination;
