import React, { useEffect, useRef } from "react";
import styles from "./item.module.css";

const Item = ({ src, active, prev, next }) => {
  const imgRef = useRef();

  useEffect(() => {
    const mStyle = imgRef.current.style;
    prev ? (mStyle.transform = "translateX(-100%)") : (mStyle.transform = "");
    next ? (mStyle.transform = "translateX(100%)") : (mStyle.transform = "");
    prev || next ? (mStyle.zIndex = "800") : (mStyle.zIndex = "");
    if (active) {
      mStyle.opacity = "1";
      mStyle.position = "relative";
      mStyle.zIndex = "900";
    }
    console.log(mStyle);
  });
  return (
    <>
      <img
        ref={imgRef}
        className={styles.img}
        src={src}
        prev={prev}
        next={next}
        alt="프로필이미지입니다."
      ></img>
    </>
  );
};

export default Item;
