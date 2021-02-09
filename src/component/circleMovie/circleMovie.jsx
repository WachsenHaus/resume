import React from "react";
import styles from "./circleMovie.module.css";

const CircleMovie = ({ img }) => {
  return (
    <>
      <div className={styles.circle}>
        <img className={styles.img} src={img} alt="메인 인트로 사진입니다." />
        <div className={styles.rotateCircle}>
          <div className={styles.color}></div>
        </div>
      </div>
    </>
  );
};

export default CircleMovie;
