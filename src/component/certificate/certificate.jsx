import React from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 25%;
  height: 10rem;
  padding: 1rem;
  //   border: 1px solid #2d3436;
  margin-top: 1rem;
  color: #636e72;
  -webkit-box-shadow: 5px 10px 15px 0px rgba(168, 168, 168, 0.76);
  box-shadow: 5px 10px 15px 0px rgba(168, 168, 168, 0.76);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.35s ease-in;
  ${({ date }) =>
    date &&
    `
  &:after {
      content: "${date}";
      margin-top : 2rem;
      font-size: 0.8rem;
  }
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }

  
  /* PC , 테블릿 가로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
    width  : 50%;
    }

    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
        width  : 50%;
    }

    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
        width  : 100%;
    }
  `}
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Certificate = ({ state }) => {
  return (
    <>
      {state && state.subject === "자격증" ? (
        <SubTitle name="자격증" active={true}></SubTitle>
      ) : (
        <SubTitle name="자격증" active={false}></SubTitle>
      )}
      <Section>
        <CardStyle date="2020/12">💻정보처리기사</CardStyle>
        <CardStyle date="2018/12">🔌전자캐드 기능사</CardStyle>
        <CardStyle date="2012/12">🚘운전면허 1종 보통</CardStyle>
      </Section>
    </>
  );
};

export default Certificate;
