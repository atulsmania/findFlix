import React from "react";
import styles from "components/Buttons/styles.module.scss";

const Buttons = ({ previousPage, currentPage, nextPage }) => (
  <div className={styles.buttons}>
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
