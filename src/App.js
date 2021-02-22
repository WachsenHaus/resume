import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./app.module.css";
import CircleMovie from "./component/circleMovie/circleMovie";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import mygif from "./img/intro.gif";
import Nav from "./component/Nav/nav";
import Introduce from "./component/Introduce/introduce";
import Skill from "./component/skill/skill";
import Company from "./component/company/company";
import Project from "./component/project/project";

function App() {
  const onClickGithub = () => {
    window.open("https://github.com/WachsenHaus");
  };
  const onClickBlog = () => {
    window.open("https://blog.naver.com/bi9choi");
  };

  const [subject, setSubject] = useState();
  const introRef = useRef();
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
  const SUBJECT_CAREAR = "경력";
  const SUBJECT_CERTIFICATE = "자격증";
  const SUBJECT_EDUCATION = "교육";
  //서브젝트가 변경되면 렌더링이 다시 되는데, 그 랜더링 위치로 이동하자.
  useEffect(() => {
    switch (subject) {
      case SUBJECT_INTRO:
        subjectRef.current[1].current.scrollIntoView({ behavior: "smooth" });
        console.log(subjectRef.current[1].current);
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
  }, [subject]);

  return (
    <div className={styles.app}>
      {/* <div>
        <Helmet>
          <title>최영훈</title>
          <meta
            name="description"
            content="최영훈의 이력서입니다."
            data-react-helmet="true"
          />
        </Helmet>
      </div> */}
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/im"> */}
          <Route exact path="/">
            <main className={styles.main}>
              <div className={styles.column}>
                <CircleMovie img={mygif}></CircleMovie>
              </div>
              <div className={styles.column}>
                <NavLink to="/me" className={styles.link}>
                  <span className={styles.name}>
                    <AiOutlineSearch />
                    최영훈
                  </span>
                </NavLink>
              </div>
              <div className={styles.column}>
                <span className={styles.icon} onClick={onClickGithub}>
                  <AiOutlineGithub size={32} />
                </span>
                <span className={styles.icon} onClick={onClickBlog}>
                  <ImBlogger size={32} />
                </span>
              </div>
            </main>
          </Route>
          <Route exact path="/me">
            <Nav setSubject={setSubject}></Nav>
            <article className={styles.article}>
              <div className={styles.container}>
                <div ref={subjectRef.current[1]}></div>
                {subject === SUBJECT_INTRO ? (
                  <Introduce active={true} />
                ) : (
                  <Introduce active={false} />
                )}
                <div ref={subjectRef.current[2]}></div>
                {subject === SUBJECT_SKILL ? (
                  <Skill active={true} />
                ) : (
                  <Skill active={false} />
                )}
                <div ref={subjectRef.current[3]}></div>
                {subject === SUBJECT_PROJECT ? (
                  <Project active={true} />
                ) : (
                  <Project active={false} />
                )}
                <div ref={subjectRef.current[4]}></div>
                {subject === SUBJECT_CAREAR ? (
                  <Company active={true} />
                ) : (
                  <Company active={false} />
                )}
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
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
