import React, { useState } from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";
import BodyBlackout from "./bodyblackout";
import Modal from "./modal";
import { AiFillHome, AiFillGithub } from "react-icons/ai";

const ProjectTitleStyle = styled.div`
  width: 100%;
  padding: 1rem auto;
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const ProjectDetailStyle = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  cursor: pointer;
  margin-left: 2rem;
  margin-top: 1rem;

  &:before {
    content: "🔎";
    margin-right: 1rem;
  }
`;

const IconStyle = styled.i`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const ProjectItem = ({
  onClick,
  isVisible,
  index,
  onSetIsVisible,
  projectContent,
  projectName,
  projectLink,
  projectGit,
  selectedItem,
}) => {
  return (
    <>
      <Modal
        index={index}
        projectName={projectName}
        projectContent={projectContent}
        isVisible={isVisible}
        onSetIsVisible={onSetIsVisible}
        selectedItem={selectedItem}
      />

      <ProjectDetailStyle onClick={onClick}>
        {projectName}
        {projectLink && (
          <IconStyle
            onClick={() => {
              window.open(`${projectLink}`);
            }}
          >
            <AiFillHome />
          </IconStyle>
        )}
        {projectGit && (
          <IconStyle
            onClick={() => {
              window.open(`${projectGit}`);
            }}
          >
            <AiFillGithub />
          </IconStyle>
        )}
      </ProjectDetailStyle>
    </>
  );
};
const Item1 = (
  <div>
    <h1>에이콘 이스케이프</h1>
    <img src="" alt="" />
    <h3>사용 기술</h3>
    <span>Java, Javascript, Oracle</span>
    <h3>개발 목표</h3>
    <span>
      기존 상용중인 사이트(큐브이스케이프)를 개선시키는 작업을 목표로 사이트를
      개발하였습니다.
    </span>
    <h3>수행 내용</h3>
    <span>
      프로젝트에서 팀장을 맡았으며 동료들이 원하는 페이지를 각자 원하는 기술로 구현하게
      하였고, 각 브랜치들을 취합하여 프로젝트를 완성하였습니다.
    </span>
    <p>역할 : 프로젝트 팀장, GIT 관리, 팀원 코딩 도움</p>
    <p>작업 내용 : 메인, Escape, 테마, 예약관리, 후기게시판 페이지</p>
  </div>
);
const Item2 = (
  <div>
    <h1>Choi 이스케이프</h1>
    <img src="" alt="" />
    <h3>사용 기술</h3>
    <span>Java, Javascript, React, Oracle</span>
    <h3>개발 목표</h3>
    <span>학원에서 진행하였던 프로젝트를 React로 변경하여 만들었습니다.</span>
    <h3>수행 내용</h3>
    <span>
      백엔드 서버 재설계 진행 (API) 운영 서버 구축 (Docker compose, tomcat, Linux)
    </span>
  </div>
);
const Item3 = (
  <div>
    <h1>{"3"}</h1>
    <h3>...</h3>
    <h5>asdf</h5>
  </div>
);
const Project = ({ state }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };
  const onSetItem = (index) => {
    setSelectedItem(index);
  };

  //어쩔꼬
  return (
    <>
      <BodyBlackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />

      {state && state.subject === "프로젝트" ? (
        <SubTitle name="프로젝트" active={true}></SubTitle>
      ) : (
        <SubTitle name="프로젝트" active={false}></SubTitle>
      )}
      <ProjectTitleStyle>
        팀 프로젝트
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(1);
          }}
          index={1}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectContent={Item1}
          projectName={"에이콘 이스케이프"}
          projectLink={"http://escape.wachsenhaus.com/"}
          projectGit={"https://github.com/WachsenHaus/acorn_escape"}
        ></ProjectItem>
      </ProjectTitleStyle>

      <ProjectTitleStyle>
        개인 프로젝트
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(2);
          }}
          index={2}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectContent={Item2}
          projectName={"Choi 이스케이프(React 프로젝트)"}
          projectLink={"http://escape-react.wachsenhaus.com/"}
          projectGit={"https://github.com/WachsenHaus/escape-react-front"}
        ></ProjectItem>
      </ProjectTitleStyle>
      <ProjectTitleStyle>
        회사 프로젝트
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(3);
          }}
          index={3}
          projectContent={Item3}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"HLS12"}
        ></ProjectItem>
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(3);
          }}
          index={3}
          projectContent={Item3}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"HLS12 측정기 솔루션"}
        ></ProjectItem>
      </ProjectTitleStyle>
      <ProjectTitleStyle>
        클론 코딩
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(3);
          }}
          index={3}
          projectContent={Item3}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"Nomad - wetube"}
        ></ProjectItem>
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(3);
          }}
          index={3}
          projectContent={Item3}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"dream coding - js rabbit"}
        ></ProjectItem>
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(3);
          }}
          index={3}
          projectContent={Item3}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"dream coding - react card maker"}
        ></ProjectItem>
      </ProjectTitleStyle>
    </>
  );
};

export default Project;
