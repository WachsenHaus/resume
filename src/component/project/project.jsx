import React from "react";
import SubTitle from "../subtitle/subTitle";

const Project = ({ active }) => {
  return (
    <>
      <SubTitle name="프로젝트" active={active}></SubTitle>
      <div>팀 프로젝트</div>
      <div>개인 프로젝트</div>
      <div>클론 코딩</div>
      <div>회사 프로젝트</div>
    </>
  );
};

export default Project;
