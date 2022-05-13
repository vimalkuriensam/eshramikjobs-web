import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  total = 10,
  pagePerView = 5,
  currentPage = 0,
  onHandlePageChange,
}) => (
  <ReactPaginate
    containerClassName="pagination"
    pageClassName="pagination__pages"
    pageLinkClassName="pagination__pages--link"
    activeClassName="pagination__pages--active"
    pageRangeDisplayed={5}
    marginPagesDisplayed={5}
    pageCount={Math.ceil(total / pagePerView)}
    previousLabel="Back"
    previousClassName="pagination__pages--action"
    nextLabel="Next"
    nextClassName="pagination__pages--action"
    initialPage={0}
    forcePage={currentPage}
    disabledClassName="pagination__pages--disabled"
    onPageChange={onHandlePageChange}
  />
);

export default Pagination;
