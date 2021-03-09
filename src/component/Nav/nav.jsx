import React, { useEffect, useRef, useCallback } from "react";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom";
import Bar from "./bar";

const Nav = ({ state, setState }) => {
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
  const onClickNav = useCallback((e) => {
    e.stopPropagation();
    if (e.target.classList.contains(styles.active)) {
      return;
    }
    items.current.forEach((item) => {
      item.current.classList.remove(styles.active);
      if (item.current === e.target) {
        setState((v) => {
          const updated = { ...v };
          updated["subject"] = item.current.innerText;
          updated["forceMove"] = true;
          return updated;
        });
      }
    });
    e.target.classList.add(styles.active);
  }, []);
  const onClickHome = useCallback(() => {
    history.push({
      pathname: "/",
    });
  }, []);

  useEffect(() => {
    items.current.forEach((item) => {
      item.current.classList.remove(styles.active);
    });
    switch (state.subject) {
      case "자기소개":
        items.current[1].current.classList.add(styles.active);
        break;
      case "기술":
        items.current[2].current.classList.add(styles.active);
        break;
      case "프로젝트":
        items.current[3].current.classList.add(styles.active);
        break;
      case "회사경력":
        items.current[4].current.classList.add(styles.active);
        break;
      case "자격증":
        items.current[5].current.classList.add(styles.active);
        break;
      case "교육":
        items.current[6].current.classList.add(styles.active);
        break;
      default:
        break;
    }
  }, [state]);

  return (
    <>
      <div>
        <nav className={styles.nav} onClick={onClickNav}>
          <h3 className={styles.active} ref={items.current[0]} onClick={onClickHome}>
            Home
          </h3>
          <h3 ref={items.current[1]}>자기소개</h3>
          <h3 ref={items.current[2]}>기술</h3>
          <h3 ref={items.current[3]}>프로젝트</h3>
          <h3 ref={items.current[4]}>회사경력</h3>
          <h3 ref={items.current[5]}>자격증</h3>
          <h3 className={`${styles.lastTag}`} ref={items.current[6]}>
            교육
          </h3>
          <Bar state={state}></Bar>
        </nav>
      </div>
    </>
  );
};

export default Nav;
