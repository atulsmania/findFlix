import React from "react";

const Buttons = ({ previousPage, currentPage, nextPage }) => (
  <div>
    <button type="button" onClick={previousPage} disabled={currentPage <= 1}>
      prev
    </button>
    <h2>{currentPage}</h2>
    <button type="button" onClick={nextPage}>
      next
    </button>
  </div>
);

export default Buttons;
