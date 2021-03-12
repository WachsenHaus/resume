import styled from "styled-components";
import Carousel from "../carousel/carousel";

const ProjectDetailTitleStyled = styled.h1`
  font-size: 2rem;

  animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  -webkit-animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;

  /* ----------------------------------------------
 * Generated by Animista on 2021-3-5 21:48:36
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation shadow-pop-tl
 * ----------------------------------------
 */
  @-webkit-keyframes shadow-pop-tl {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
        -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e,
        -8px -8px #3e3e3e;
      box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
        -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e,
        -8px -8px #3e3e3e;
      -webkit-transform: translateX(8px) translateY(8px);
      transform: translateX(8px) translateY(8px);
    }
  }
  @keyframes shadow-pop-tl {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
        -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e,
        -8px -8px #3e3e3e;
      box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e,
        -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e,
        -8px -8px #3e3e3e;
      -webkit-transform: translateX(8px) translateY(8px);
      transform: translateX(8px) translateY(8px);
    }
  }
`;
export const Item1 = (
  <div>
    <ProjectDetailTitleStyled>에이콘 이스케이프</ProjectDetailTitleStyled>
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/v1614955539/escape_jsp_y8szx7.gif"
      alt="에이콘 이스케이프 사진입니다"
      style={{
        width: "100%",
      }}
    />
    <h3>사용 기술</h3>
    <span>Java, Javascript, Oracle</span>
    <h3>개발 목표</h3>
    <span>
      기존 상용중인 사이트(큐브이스케이프)를 개선시키는 작업을 목표로 사이트를 개발한다
    </span>
    <h3>수행 내용</h3>
    <span>
      프로젝트에서 팀장을 맡았으며 동료들이 원하는 페이지를 각자 원하는 기술로 구현하게
      하였고, 각 브랜치들을 취합하여 프로젝트를 완성하고, 프론트엔드 부분을 담당함
    </span>
    <p>역할 : 프로젝트 팀장, GIT 관리, 팀원 코딩 도움, 서버 운영, 프론트엔드 </p>
    <p>작업 내용 : 메인, Escape, 테마, 예약관리, 후기게시판 페이지</p>
  </div>
);
export const Item8 = (
  <div>
    <ProjectDetailTitleStyled>에이콘 팬션</ProjectDetailTitleStyled>
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,q_auto:eco,w_494/v1615561443/ateam_dh2ame.gif"
      alt="에이콘 ateam 팬션 사진입니다"
      style={{
        width: "100%",
      }}
    />
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/q_auto:eco/v1615560889/2020-07-31-acorn-ateam-semi-%EB%B0%9C%ED%91%9C%EC%9A%A9.pptx_12_ihcrfd.jpg"
      alt="ateam 팬션 개발도구 사진"
      style={{
        width: "100%",
      }}
    />
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/q_auto:eco/v1615560889/2020-07-31-acorn-ateam-semi-%EB%B0%9C%ED%91%9C%EC%9A%A9.pptx_5_eiyazq.jpg"
      alt="ateam 팬션 erd 사진"
      style={{
        width: "100%",
      }}
    />

    <h3>사용 기술</h3>
    <span>Java, Javascript, Oracle, JSP</span>
    <h3>개발 목표</h3>
    <span>에이콘 팬션 사이트를 구현해보자.</span>
    <h3>수행 내용</h3>
    <span>프로젝트 관리, 프로젝트 설계, 프론트엔드 업무 담당</span>
  </div>
);
export const Item2 = (
  <div>
    <ProjectDetailTitleStyled>Choi 이스케이프</ProjectDetailTitleStyled>
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/v1614955539/escape_react_pns4wh.gif"
      alt="CHOI 이스케이프 사진입니다"
      style={{
        width: "100%",
      }}
    />
    <h3>사용 기술</h3>
    <span>Java, Javascript, React, Oracle</span>
    <h3>개발 목표</h3>
    <p>학원에서 진행하였던 팀플 프로젝트를 React로 변경하는것을 목표로 한다</p>
    <h3>수행 내용</h3>
    <p>
      프로젝트 모든 내용 진행 <br />
      백엔드 서버 재설계 진행 (API), 운영 서버 구축 (Docker compose, tomcat, Linux) <br />
      프론트엔드 REACT로 개발 진행함
      <br />
    </p>
  </div>
);

export const Item3 = (
  <div>
    <ProjectDetailTitleStyled>HLS12</ProjectDetailTitleStyled>
    <Carousel
      images={[
        "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/리니어서보1_fv4ano.png",
        "https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/20190723_144051_mavupf.png",
      ]}
    />
    <h3>사용 기술</h3>
    <span>FPCB 회로개발</span>
    <h3>개발 목표</h3>
    <p>리니어서보 개발을 위한 회로를 개발한다. </p>
    <h3>수행 내용</h3>
    <p>
      기존 일반 서보모터의 PCB를 FPCB로 재설계하였음.
      <br />
      제품에 사용할 모터 채택과 pcb를 개발하여 제품을 완성하였음.
      <br />
      제품의 회로파트(100%),테스트(60%)를 담당하였음.
      <br />
    </p>
  </div>
);

export const Item4 = (
  <div>
    <ProjectDetailTitleStyled>HLS12 PC GUI</ProjectDetailTitleStyled>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        width="560"
        height="315"
        title="HLS12 PC GUI"
        src="https://www.youtube.com/embed/45TNL1J0o-U"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <h3>사용 기술</h3>
    <span>C#, WPF, 회로개발, 펌웨어개발</span>
    <h3>개발 목표</h3>
    <p>HLS12의 성능을 검증하기 위한 테스트 지그를 개발한다.</p>
    <h3>수행 내용</h3>
    <p>
      테스트 지그의 회로, 펌웨어, PC GUI를 개발하엿음 <br />
      회로의 센서 선정, 회로도, PCB설계를 진행하였음 <br />
      마이컴보드의 펌웨어 개발을 진행하였음 <br />
      C#과 WPF을 사용하여 PC GUI를 개발하였음,차트 라이브러리로는 live chart을 사용함{" "}
      <br />
    </p>
  </div>
);

export const Item5 = (
  <div>
    <ProjectDetailTitleStyled>Nomad - wetube</ProjectDetailTitleStyled>
    <img
      // src="https://res.cloudinary.com/dmglufkmz/image/upload/c_scale,h_768,w_1024/v1614845131/escape_jsp_y8szx7.wepb"
      src="https://res.cloudinary.com/dmglufkmz/image/upload/v1614955539/wetube_tnstew.gif"
      alt="wetube gif 이미지입니다"
      style={{
        width: "100%",
      }}
    />
    <h3>사용 기술</h3>
    <span>javascript,html,css heroku</span>
    <h3>개발 목표</h3>
    <p>노마드코더의 wetube를 클론코딩하며 능력을 함양한다. </p>
  </div>
);
export const Item6 = (
  <div>
    <ProjectDetailTitleStyled>Dream coding - rabbit</ProjectDetailTitleStyled>
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/v1614845518/rabbit_sfbjrs.gif"
      alt="rabbit gif 이미지입니다"
      style={{
        width: "100%",
      }}
    />
    <h3>사용 기술</h3>
    <span>Javascript, css, html</span>
    <h3>개발 목표</h3>
    <p>순수한 javascript를 사용하여 간단한 프로젝트를 클론코딩해본다.</p>
    <h3>수행 내용</h3>
    <p>
      vanilla js을 사용하여 자바스크립트 미니게임 프로젝트를 클론코딩함
      <br />
      클론 코딩하며 프론트엔드 역량을 함양시킨다.
      <br />
    </p>
  </div>
);
export const Item7 = (
  <div>
    <ProjectDetailTitleStyled>Dream coding - card maker</ProjectDetailTitleStyled>
    <img
      src="https://res.cloudinary.com/dmglufkmz/image/upload/v1614845518/card_txzfm9.gif"
      alt="카드메이커 GIF 이미지입니다"
      style={{
        width: "100%",
      }}
    />
    <h3>사용 기술</h3>
    <span>react, javascript, firebase</span>
    <h3>개발 목표</h3>
    <p>드림코딩의 react과정 프로젝트를 클론코딩하며 자바스크립트 능력을 함양한다. </p>
  </div>
);
