import React from "react";
import styles from "components/Loading/styles.module.scss";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.lds_facebook}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
