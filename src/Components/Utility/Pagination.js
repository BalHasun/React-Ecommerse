import React from "react";
import ReactPaginate from "react-paginate";


const PaginationCompontent = ({ pageCount, onPress }) => {

  // on press on the Pagination
  const handlePageClick = (data) => {

    // Submit the specified page number to props aria
    onPress(data.selected + 1)
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}

      // The number of pages coming from the props
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationCompontent;
