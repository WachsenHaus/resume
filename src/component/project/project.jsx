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
        <IconStyle
          onClick={() => {
            window.open(`${projectLink}`);
          }}
        >
          <AiFillHome />
        </IconStyle>
        <IconStyle
          onClick={() => {
            window.open(`${projectGit}`);
          }}
        >
          <AiFillGithub />
        </IconStyle>
      </ProjectDetailStyle>
    </>
  );
};
const DivStyeld = styled.div``;
const Item1 = (
  <DivStyeld>
    <h1>{"1"}</h1>
    <h3>...</h3>
    <h5>asdf</h5>
  </DivStyeld>
);
const Item2 = (
  <DivStyeld>
    <h1>{"2"}</h1>
    <h3>...</h3>
    <h5>asdf</h5>
  </DivStyeld>
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
      <ProjectTitleStyle>회사 프로젝트,HLS12,HLS12측정 솔루션</ProjectTitleStyle>
      <ProjectTitleStyle>클론 코딩, 노마드코더,드림코딩 기타 등등</ProjectTitleStyle>
    </>
  );
};

export default Project;
