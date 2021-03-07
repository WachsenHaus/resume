import React, { useState } from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./app.module.css";
import CircleMovie from "./component/circleMovie/circleMovie";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import Nav from "./component/Nav/nav";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";

const images = [
  "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/image1_evwpzo.webp",
  "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/image2_ayfvpt.webp",
  "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/image3_t34syn.webp",
  "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/image4_fnv9f9.webp",
  "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/image5_qym7tj.webp",
]; //프로필이미지

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
      <BrowserRouter basename="/resume">
        <Switch>
          <Route exact path="/">
            {/* <Route exact path="/"> */}
            <main className={styles.main}>
              <div className={styles.column}>
                <CircleMovie
                  img={
                    "https://res.cloudinary.com/dmglufkmz/image/upload/v1614955539/intro_f2gtsp.gif"
                  }
                ></CircleMovie>
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
            <main style={{ width: "100%", height: "100%" }}>
              <Nav state={state} setState={setState}></Nav>
              <Content images={images} state={state} setState={setState}></Content>
              <Footer></Footer>
            </main>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
