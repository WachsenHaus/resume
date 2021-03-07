import React from "react";
import Carousel from "../carousel/carousel";
import styles from "./introduce.module.css";
import SubTitle from "../subtitle/subTitle";

const Introduce = ({ images, state }) => {
  return (
    <>
      {state && state.subject === "자기소개" ? (
        <SubTitle name="자기소개" active={true}></SubTitle>
      ) : (
        <SubTitle name="자기소개" active={false}></SubTitle>
      )}
      <Carousel images={images} />
      <span className={styles.span}>
        안녕하세요 좋은 UX 경험을 제공하고 싶은 프론트엔드 개발자 최영훈(29)입니다.
      </span>
      <span className={styles.span}>
        4년 동안 다방면의 개발과 업무를 진행하면서, 앞으로 개발 일을 하면서 즐기면서 할 수
        있는 개발이 무엇인지 고민하였습니다.
      </span>
      <span className={styles.span}>
        PC UI개발, 하드웨어 개발, 마이컴의 펌웨어 개발등을 하면서 내가 가장 집중하고
        관심있던 개발이 어디였을까 생각해봤을 때
      </span>
      <span className={styles.span}>
        사용자가 어떻게 하면 좀 더 편하고 만족스러워 하면서 사용할까 라는 고민을 많이
        하였던 것을 알게 되었고
      </span>
      <span className={styles.span}>
        제가 개발에 임하는 태도를 가장 잘 살릴 수 있는 분야가 프론트엔드 분야라는 것을
        알게 되었습니다.
      </span>
      <span className={styles.span}>
        근성과 열정있는 태도로 발전하는 프론트엔드 개발자 최영훈이 되겠습니다
      </span>
    </>
  );
};

export default Introduce;
