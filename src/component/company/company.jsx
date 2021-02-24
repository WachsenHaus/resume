import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";

const CarearStyle = styled.span`
  width: 100%;
  // border-top: 0.1px solid black;
  margin-top: 1rem;
  position: relative;
`;
const CarearTitleStyle = styled.div`
  width: 100%;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
`;
const CarearSubTitleStyle = styled.span`
  right: 5rem;
  position: absolute;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);
`;
const CarearContentStyle = styled.section`
  width: 100%;
  margin-left: 1rem;
`;
const Company = ({ state }) => {
  return (
    <>
      {state && state.subject === "회사경력" ? (
        <SubTitle name="회사경력" active={true}></SubTitle>
      ) : (
        <SubTitle name="회사경력" active={false}></SubTitle>
      )}
      <CarearStyle>
        <CarearTitleStyle>
          에이치티에스
          <CarearSubTitleStyle>2015/11 ~ 2017/12</CarearSubTitleStyle>
        </CarearTitleStyle>
        <CarearContentStyle>
          <p>🐣 조명 컨트롤러 회로 & 펌웨어 개발</p>
          <p>🐣 아모레 퍼시픽 머신 비전 프로그램 스크립트 작성</p>
          <p>🐣 아모레 퍼시픽 PC GUI 개발 납품</p>
          <p>🐣 라인스캔 PC GUI 개발</p>
          <p>🐣 신성에프에이 - BOE 테스트 자료 보고 및 기술 교육</p>
          <p>🐣 현대모비스 머신비전 공정 Sub PM</p>
          <p>🐣 하나ENG 공정 효율성 증가 개선 작업</p>
          <p>🐣 서울산업 GDI 머신비전 공정 테스트 및 스크립트 작성</p>
        </CarearContentStyle>
      </CarearStyle>
      <CarearStyle>
        <CarearTitleStyle>
          하이텍알씨디코리아
          <CarearSubTitleStyle>2018/01 ~ 2020/01</CarearSubTitleStyle>
        </CarearTitleStyle>
        <CarearContentStyle>
          <p>🐔 공장용 개발용 PC UI 프로그램 개발</p>
          <p>🐔 리니어 서보 스펙 측정 장비(HW, F/W, PC GUI) 솔루션 개발</p>
          <p>🐔 서보 모터 교육 진행</p>
          <p>🐔 리니어 서보 회로 & PCB 개발</p>
          <p>🐔 Factory Program PC UI 개발</p>
          <p>🐔 CAN SERVO 개발 지원</p>
          <p>🐔 DPC-CAN PCB 개발</p>
          <p>🐔 Hitec-Simple Programmer 개발</p>
        </CarearContentStyle>
      </CarearStyle>
    </>
  );
};

export default Company;
