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
        <CarearContentStyle>asdfasdf asdfasdf asdf</CarearContentStyle>
      </CarearStyle>
      <CarearStyle>
        <CarearTitleStyle>
          하이텍알씨디코리아
          <CarearSubTitleStyle>2018/01 ~ 2020/01</CarearSubTitleStyle>
        </CarearTitleStyle>
      </CarearStyle>
    </>
  );
};

export default Company;
