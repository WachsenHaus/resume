import React, { useEffect, useRef } from "react";
import style from "./button.module.css";

const Button = ({ prev, next, handleSlide }) => {
  const buttonRef = useRef();

  useEffect(() => {
    const mStyle = buttonRef.current.style;
    console.log(mStyle);
    // prev && mStyle.left = "0";
    if (prev) {
      mStyle.left = "0";
    }
    if (next) {
      mStyle.right = "0";
      //   mStyle.after.left = "47%";
      //   mStyle.after.transform = " translate(-50%, -50%) rotate(-45deg)";
      //
    }
  }, []);

  return (
    <>
      <div ref={buttonRef} className={style.wrapper} onClick={handleSlide}></div>
    </>
  );
};

export default Button;
