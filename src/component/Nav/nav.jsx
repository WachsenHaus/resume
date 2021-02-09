import React, { useCallback, useRef } from "react";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom";
const Nav = (props) => {
  //전체 페이지 크기를 전달받는다.

  const history = useHistory();
  const items = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const bar = useRef();
  const onClickNav = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains(styles.active)) {
      return;
    }
    items.current.forEach((item) => {
      item.current.classList.remove(styles.active);
    });
    e.target.classList.add(styles.active);
  };
  const onClickHome = () => {
    history.push({
      pathname: "/",
    });
  };

  const getPercent = useCallback(() => {}, []);

  return (
    <>
      <div className={styles.wrapper}>
        <nav className={styles.nav} onClick={onClickNav}>
          <h3 className={styles.active} ref={items.current[0]} onClick={onClickHome}>
            Home
          </h3>
          <h3 ref={items.current[1]}>자기소개</h3>
          <h3 ref={items.current[2]}>기술</h3>
          <h3 ref={items.current[3]}>프로젝트</h3>
          <h3 ref={items.current[4]}>회사경력</h3>
          <h3 ref={items.current[5]}>자격증</h3>
          <h3 ref={items.current[6]}>교육</h3>
          <div className={styles.progress}>
            <span ref={bar} className={styles.bar}></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
