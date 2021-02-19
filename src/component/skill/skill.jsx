import styled from "styled-components";
import styles from "./skill.module.css";

const SkillStyle = styled.div`
  width: 100%;
  color: rgba(22, 17, 11, 0.61);
  left: 0;
  font-size: 2rem;
  margin-top: 1rem;
  display: block;

  &:before {
    content: "기술";
    border-bottom: medium double rgba(22, 17, 11, 1);
  }
`;
const mainSkills = [
  {
    name: "HTML & CSS",
    expert: "70",
    explan:
      "시맨틱 HTML 적용과 반응형 애니메이션, SCSS, moduel CSS등을 적용할 수 있습니다.",
  },
  {
    name: "JavaScript",
    expert: "90",
    explan:
      "진화되는 라이브러리에 적용할 수 있도록 자바스크립트의 기본과 기초를 반복,숙달하여 어떠한 라이브러리라도 금방 사용할 수 있게끔 꾸준히 공부하고있습니다.",
  },
  {
    name: "React",
    expert: "70",
    explan: "React에서 제공하는 기본 hooks,effect등을 사용 할 수 있습니다.",
  },
];
const subSkills = [
  {
    name: "C#",
    expert: "85",
    explan:
      "C#과 WPF를 활용하여 PC UI를 만들 수 있습니다. 회사에서 RealChart를 사용하여 데이터시각화 프로그램을 만든 경험이 있습니다, 많은 PC UI 제작 경험이 있습니다.",
  },
  {
    name: "JAVA",
    expert: "70",
    explan:
      "국비지원을 받으면서 공부하였으며, 스프링 웹 백엔드 서버를 개발할 때 사용 할 수 있습니다.",
  },
  {
    name: "회로설계",
    expert: "50",
    explan: "양면 PCB와  Flexible PCB를 설계하여 상용 제품을 만든 경험이 있습니다.",
  },
];
const etcSkills = [
  {
    name: "Git & GitHub",
    expert: "80",
    explan: "git을 사용하여 동료들과 협업을 통해 프로젝트를 진행 할 수 있습니다.",
  },
  {
    name: "Notion",
    expert: "80",
    explan: "일정관리등 기타 문서관리등에 사용하고있습니다.",
  },
];

export default function Skill() {
  return (
    <SkillStyle>
      <div className={styles.box}>
        <span className={styles.title}>메인</span>
        <div className={styles.subBox}>
          {mainSkills.map((item) => {
            return (
              <div className={styles.skill}>
                <div>{item.name}</div>
                <progress
                  className={styles.progressTag}
                  value={`${item.expert}`}
                  max="100"
                ></progress>
                <span className={styles.explan}>{item.explan}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.box}>
        <span className={styles.title}>서브</span>
        <div className={styles.subBox}>
          {subSkills.map((item) => {
            return (
              <div className={styles.skill}>
                <div>{item.name}</div>
                <progress
                  className={styles.progressTag}
                  value={`${item.expert}`}
                  max="100"
                ></progress>
                <span className={styles.explan}>{item.explan}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.box}>
        <span className={styles.title}>etc</span>
        <div className={styles.subBox}>
          {etcSkills.map((item) => {
            return (
              <div className={styles.skill}>
                <div>{item.name}</div>
                <progress
                  className={styles.progressTag}
                  value={`${item.expert}`}
                  max="100"
                ></progress>
                <span className={styles.explan}>{item.explan}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SkillStyle>
  );
}
