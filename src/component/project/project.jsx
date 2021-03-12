import React, { useState } from "react";
import SubTitle from "../subtitle/subTitle";
import styled from "styled-components";
import BodyBlackout from "./bodyblackout";
import Modal from "./modal";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import {
  ItemDetail,
  Item1,
  Item8,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
} from "./item";

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
  ${({ color }) => color && `color : ${color}`}

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
  color,
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
            <AiFillHome color={color} />
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
        <ProjectItem
          color={"blue"}
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(8);
          }}
          index={8}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectContent={Item8}
          projectName={"에이콘 Ateam 팬션"}
          projectLink={
            "https://www.notion.so/bi9choi/A-team-6ad35f35e86c4a40a90b13314ff8a25b"
          }
          projectGit={"https://github.com/WachsenHaus/acorn_ateam"}
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
            onSetItem(4);
          }}
          index={4}
          projectContent={Item4}
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
            onSetItem(5);
          }}
          index={5}
          projectContent={Item5}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"Nomad - wetube"}
        ></ProjectItem>
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(6);
          }}
          index={6}
          projectContent={Item6}
          isVisible={isVisible}
          onSetIsVisible={onSetIsVisible}
          selectedItem={selectedItem}
          projectName={"dream coding - js rabbit"}
        ></ProjectItem>
        <ProjectItem
          onClick={() => {
            onSetIsVisible(true);
            onSetItem(7);
          }}
          index={7}
          projectContent={Item7}
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
