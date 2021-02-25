import React, { useState } from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./app.module.css";
import CircleMovie from "./component/circleMovie/circleMovie";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import mygif from "./img/intro.gif";
import Nav from "./component/Nav/nav";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";

function App() {
  const [state, setState] = useState({
    percentage: "0",
    forceMove: false,
    subject: null,
  });

  const onClickGithub = () => {
    window.open("https://github.com/WachsenHaus");
  };
  const onClickBlog = () => {
    window.open("https://blog.naver.com/bi9choi");
  };

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
            <Nav state={state} setState={setState}></Nav>
            <Content state={state} setState={setState}></Content>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
