import React, { useState } from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";
import BodyBlackout from "./bodyblackout";
import Modal from "./modal";
const ProjectTitleStyle = styled.div`
  width: 100%;
  padding: 1rem auto;
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
`;

const ProjectDetailStyle = styled.div`
  cursor: pointer;
  margin-left: 2rem;
  margin-top: 1rem;

  &:before {
    content: "🔎";
    margin-right: 1rem;
  }
`;

const Project = ({ state }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };

  //어쩔꼬
  return (
    <>
      <BodyBlackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
      <Modal isVisible={isVisible} onSetIsVisible={onSetIsVisible} />

      {state && state.subject === "프로젝트" ? (
        <SubTitle name="프로젝트" active={true}></SubTitle>
      ) : (
        <SubTitle name="프로젝트" active={false}></SubTitle>
      )}
      <ProjectTitleStyle>
        팀 프로젝트
        <ProjectDetailStyle
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => onSetIsVisible(true)}
        >
          에이콘이스케이프
        </ProjectDetailStyle>
      </ProjectTitleStyle>

      <ProjectTitleStyle>개인 프로젝트,리액트이스케이프</ProjectTitleStyle>
      <ProjectTitleStyle>회사 프로젝트,HLS12,HLS12측정 솔루션</ProjectTitleStyle>
      <ProjectTitleStyle>클론 코딩, 노마드코더,드림코딩 기타 등등</ProjectTitleStyle>
    </>
  );
};

export default Project;
