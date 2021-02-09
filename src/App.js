import styles from "./app.module.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CircleMovie from "./component/circleMovie/circleMovie";
import mygif from "./img/intro.gif";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Route exact path="/">
          <main className={styles.main}>
            <div className={styles.column}>
              <CircleMovie img={mygif}></CircleMovie>
            </div>
            <div className={styles.column}>
              <span className={styles.name}>
                <AiOutlineSearch />
                최영훈
              </span>
            </div>
            <div className={styles.column}>
              <span className={styles.icon}>
                <AiOutlineGithub size={32} />
              </span>
              <span className={styles.icon}>
                <ImBlogger size={32} />
              </span>
            </div>
          </main>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
