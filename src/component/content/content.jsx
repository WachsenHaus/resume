import React, { useCallback, useEffect, useRef } from "react";
import Company from "../company/company";
import Introduce from "../Introduce/introduce";
import Project from "../project/project";
import Skill from "../skill/skill";
import styles from "./content.module.css";

const Content = ({ state, setState }) => {
  const articleRef = useRef();
  const subjectRef = useRef([
    React.createRef(), //더미
    React.createRef(), //자기소개
    React.createRef(), //기술
    React.createRef(), //프로젝트
    React.createRef(), //경력
    React.createRef(), //자격증
    React.createRef(), //교육
  ]);
  const SUBJECT_INTRO = "자기소개";
  const SUBJECT_SKILL = "기술";
  const SUBJECT_PROJECT = "프로젝트";
  const SUBJECT_CAREAR = "회사경력";

  const getPosition = useCallback(
    (forceMove, subject = SUBJECT_INTRO) => {
      // console.log(subjectRef.current[1].current);
      // if (!subjectRef.current[1].current) {
      //   return;
      // }
      const intro = parseInt(subjectRef.current[1].current.getBoundingClientRect().y);
      const skill = parseInt(subjectRef.current[2].current.getBoundingClientRect().y);
      const project = parseInt(subjectRef.current[3].current.getBoundingClientRect().y);
      const carear = parseInt(subjectRef.current[4].current.getBoundingClientRect().y);
      if (forceMove === false) {
        if (intro > 5 && intro <= 250) {
          subject = SUBJECT_INTRO;
        } else if (skill > 15 && skill <= 250) {
          subject = SUBJECT_SKILL;
        } else if (project > 15 && project <= 250) {
          subject = SUBJECT_PROJECT;
        } else if (carear > 15 && carear <= 250) {
          subject = SUBJECT_CAREAR;
        }
      }
      if (forceMove === true) {
        switch (state.subject) {
          case SUBJECT_INTRO:
            if (intro > 5 && intro <= 250) {
              forceMove = false;
            }
            break;
          case SUBJECT_SKILL:
            if (skill > 5 && skill <= 250) {
              forceMove = false;
            }
            break;
          case SUBJECT_PROJECT:
            if (project > 5 && project <= 250) {
              forceMove = false;
            }
            break;
          case SUBJECT_CAREAR:
            if (carear > 5 && carear <= 250) {
              forceMove = false;
            }
            break;
          default:
            break;
        }
      }
      setState((v) => {
        const updated = { ...v };
        updated["subject"] = subject;
        updated["forceMove"] = forceMove;
        return updated;
      });
    },
    [state.subject]
  );

  useEffect(() => {
    getPosition(state.forceMove, state.subject);
  }, [state.percentage]);

  //서브젝트가 변경되면 렌더링이 다시 되는데, 그 랜더링 위치로 이동하자.
  useEffect(() => {
    if (state.forceMove === true) {
      //단 forcemove가 true이면 현재위치를 계산하지 않고 스크롤인투뷰만 한다.
      //forcemove가 true이면, subject도 변경되어있을것이다.
      //해당위치에 도착하면 forcemove를 false로 돌린다.
      switch (state.subject) {
        case SUBJECT_INTRO:
          subjectRef.current[1].current.scrollIntoView({ behavior: "smooth" });
          break;
        case SUBJECT_SKILL:
          subjectRef.current[2].current.scrollIntoView({ behavior: "smooth" });
          break;
        case SUBJECT_PROJECT:
          subjectRef.current[3].current.scrollIntoView({ behavior: "smooth" });
          break;
        case SUBJECT_CAREAR:
          subjectRef.current[4].current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }
  }, [state.subject]);

  const onScroll = () => {
    articleRef.current && articleRef.current.addEventListener("scroll", onScrollCallback);
  };
  const onScrollCallback = useCallback(() => {
    let scrollHeight = articleRef.current.clientHeight;
    let scrollRealHeight = articleRef.current.scrollHeight - scrollHeight;
    let winScrollTop = articleRef.current.scrollTop; //현재 스크롤 위치
    let scrollPercent = (winScrollTop / scrollRealHeight) * 100;
    let textPercent = Math.floor(scrollPercent);
    setState((v) => {
      const updated = { ...v };
      updated["percentage"] = textPercent;
      return updated;
    });
  }, []);

  const throttle = useCallback((func, ms) => {
    let throttled = false;
    return () => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func();
          throttled = false;
        }, ms);
      }
    };
  }, []);

  useEffect(() => {
    setState((v) => {
      const updated = { ...v };
      updated["subject"] = SUBJECT_INTRO;
      return updated;
    });
    onScroll();
  }, []);
  return (
    <>
      <article className={styles.article} ref={articleRef}>
        <div className={styles.container}>
          <div ref={subjectRef.current[1]}></div>
          <Introduce state={state} />
          <div ref={subjectRef.current[2]}></div>
          <Skill state={state} />
          <div ref={subjectRef.current[3]}></div>
          <Project state={state} />
          <div ref={subjectRef.current[4]}></div>
          <Company state={state} />
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>??</div>
          <div>끝</div>
        </div>
      </article>
    </>
  );
};

export default Content;
