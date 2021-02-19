import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./app.module.css";
import navStyles from "./component/Nav/nav.module.css";
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

  const bodyItems = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const testRef = useRef();
  useEffect(() => {
    console.log(testRef);
  }, []);

  // useState
  const [subject, setSubject] = useState();
  // const currentSubject;
  // console.log(currentSubject);

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
            <Nav setSubject={setSubject} bodyItems={bodyItems}></Nav>
            <article className={styles.article}>
              <div className={styles.container}>
                {subject === "자기소개" ? (
                  <Introduce active={true} />
                ) : (
                  <Introduce active={false} />
                )}
                {subject === "기술" ? <Skill active={true} /> : <Skill active={false} />}
                {subject === "프로젝트" ? (
                  <Project active={true} />
                ) : (
                  <Project active={false} />
                )}
                {subject === "회사경력" ? (
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
