import React from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 45%;
  height: 25rem;
  padding: 1rem;
  margin-top: 1rem;
  font-size: small;
  text-align: center;
  color: #636e72;
  -webkit-box-shadow: 5px 10px 15px 0px rgba(168, 168, 168, 0.76);
  box-shadow: 5px 10px 15px 0px rgba(168, 168, 168, 0.76);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  transition: all 0.35s ease-in;
  ${({ date }) =>
    date &&
    `
  &:after {
      content: "${date}";
      position: absolute;
      top : 0;z
      margin-top : 2rem;
      font-size: 0.8rem;
  }
  &:hover{
    transform: scale(1.01);
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
  margin-bottom: 2rem;
`;

const Div = styled.section`
  border-top: 1px solid black;
  width: 100%;
  margin-top: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow: auto;
  text-align: left;
  &: last-child {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Education = ({ state }) => {
  return (
    <>
      {state && state.subject === "교육" ? (
        <SubTitle name="교육" active={true}></SubTitle>
      ) : (
        <SubTitle name="교육" active={false}></SubTitle>
      )}
      <Section>
        <CardStyle date="2020/04 ~ 2020/10">
          💻 자바 개발자 양성과정 <br />
          에이콘아카데미
          <Div>
            백엔드 <br />
            - java <br />
            - Spring <br />
            - Oracle 11g <br />
            프론트엔드 <br />
            - Javascript <br />
            - Css <br />
            - HTML <br />
            - Angular
            <br />
            <br />
          </Div>
        </CardStyle>
        <CardStyle date="2019/05 ~ 2019/08">
          💻 프로그래밍 입문(C#)
          <br />
          POCU 아카데미
          <Div>
            1. 기본자료형 <br />
            2. 연산자 & 문자열 <br />
            3. 관계 연산자 논리 연산자 조건 연산자, 불리언형, 표현식 <br />
            4. 조건문, 배열, 반복문 , 다차원배열 <br />
            5. 함수, 호출식, 범위, 열거형 ,ref <br />
            6. 재귀함수, 랜덤수 <br />
            7. 토큰화,함수 오버로딩, 배열안의 배열 <br />
            8. 문자열 빌더, decimal형, var,foreach <br />
            9. OOP, 클래스,프로퍼티,PARTIAL , STATIC, EXTENSION METHOD <br />
            10. 예외처리, 구조체, NULLABLE <br />
            과제4개와,실습 11개, 중간고사,기말고사 통과하여 이수 완료
          </Div>
        </CardStyle>
        <CardStyle date="2017/11">
          💻 ARM Cortex-M 구조 및 주변장치 실무 <br /> 부천산업진흥재단
          <Div>
            Cortex-M3 프로세서의 개요 <br />
            - STM32F10x 마이크로컨트롤러의 구조 <br />
            - 실습보드 소개 (STM32F107이용) <br />
            - 프로그램 개발용 S/W 소개 및 설치 <br />
            Standard Peripheral Library(SPL) <br />
            - STM32CubeMX 및 HAL 라이브러리 <br />
            - ARM사의 mbed <br />
            - GPIO 및 응용 프로그램 <br />
            - Interrupt 및 응용 프로그램 <br />
            Timer 및 응용 프로그램 <br />
            - ADC 및 응용 프로그램 <br />
            - UART의 구조 및 응용 프로그램 <br />
            - USB의 구조 및 응용 프로그램(Keil) <br />
            - Ethernet, TCP/IP 및 응용 프로그램(Keil) <br />
          </Div>
        </CardStyle>
        <CardStyle date="2016/08">
          🔌 멜섹Q-프로그래밍 향상 <br /> 부천PLC교육 전자학원
          <Div>
            미쯔비시사 PLC 멜섹Q 프로그래밍 교육이수.
            <br />
            - Melsec PLC 로직 프로그래밍 교육수료. <br />
          </Div>
        </CardStyle>
      </Section>
    </>
  );
};

export default Education;
