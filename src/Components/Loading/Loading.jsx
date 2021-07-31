import React, { useState, useEffect } from "react";
import styles from "./Loading.module.scss";

const initialState = {
  1: true,
  2: false,
  3: false,
  4: false,
};

function Loading() {
  const [activeBlock, setActiveBlock] = useState(initialState);

  useEffect(() => {
    function change() {
      if (activeBlock["1"]) return { 2: true, 1: false, 3: false, 4: false };
      else if (activeBlock["2"])
        return { 3: true, 2: false, 1: false, 4: false };
      else if (activeBlock["3"])
        return { 4: true, 2: false, 3: false, 1: false };
      else return { 1: true, 2: false, 3: false, 4: false };
    }
    let id = setTimeout(() => setActiveBlock(change()), 200);

    return () => clearTimeout(id);
  });
  return (
    <div className={styles.container}>
      <h1>Fetching</h1>
      <div className={styles.blockContainer}>
        <div
          className={`${styles.block} ${
            activeBlock[1] ? styles.activeBlock : ""
          }`}
        ></div>
        <div
          className={`${styles.block} ${
            activeBlock[2] ? styles.activeBlock : ""
          }`}
        ></div>
        <div
          className={`${styles.block} ${
            activeBlock[4] ? styles.activeBlock : ""
          }`}
        ></div>
        <div
          className={`${styles.block} ${
            activeBlock[3] ? styles.activeBlock : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Loading;
