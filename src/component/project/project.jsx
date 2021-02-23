import React from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";
const ProjectTitleStyle = styled.div`
  width: 100%;
  padding: 1rem auto;
  border: 1px solid black;
  margin-top: 1rem;
`;

const Project = ({ state }) => {
  return (
    <>
      {state && state.subject === "프로젝트" ? (
        <SubTitle name="프로젝트" active={true}></SubTitle>
      ) : (
        <SubTitle name="프로젝트" active={false}></SubTitle>
      )}
      <ProjectTitleStyle>팀 프로젝트</ProjectTitleStyle>
      <ProjectTitleStyle>개인 프로젝트</ProjectTitleStyle>
      <ProjectTitleStyle>회사 프로젝트</ProjectTitleStyle>
      <ProjectTitleStyle>클론 코딩</ProjectTitleStyle>
    </>
  );
};

export default Project;
