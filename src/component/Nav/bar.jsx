import React, { useEffect, useRef } from "react";
import styles from "./bar.module.css";
const Bar = ({ state }) => {
  const bar = useRef();
  useEffect(() => {
    bar.current.style.width = `${state.percentage}%`;
  }, [state]);

  return (
    <>
      <div className={styles.progress}>
        <span ref={bar} className={styles.bar}></span>
      </div>
    </>
  );
};

export default Bar;
