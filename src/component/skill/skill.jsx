import SubTitle from "../subtitle/subTitle";
import styles from "./skill.module.css";

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
  {
    name: "Docker",
    expert: "50",
    explan: "DB서버와 웹서버를 가동할 때 사용하고있습니다.",
  },
  {
    name: "클라우드 플랫폼(AWS,Azure,Naver)",
    expert: "50",
    explan: "IAAS로 컴퓨터 자원을 사용할 때 가끔씩 사용하고있습니다.",
  },
];

export default function Skill({ state }) {
  return (
    <>
      {state && state.subject === "기술" ? (
        <SubTitle name="기술" active={true}></SubTitle>
      ) : (
        <SubTitle name="기술" active={false}></SubTitle>
      )}

      <div className={styles.box}>
        <span className={styles.title}>메인</span>
        <div className={styles.subBox}>
          {mainSkills.map((item, index) => {
            return (
              <div className={styles.skill} key={`main index_${index}`}>
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
          {subSkills.map((item, index) => {
            return (
              <div className={styles.skill} key={`sub index_${index}`}>
                <div>{item.name}</div>
                <progress
                  className={`${styles.progressTag} ${styles.progressSub}`}
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
        <span className={styles.title}>etc.</span>
        <div className={styles.subBox}>
          {etcSkills.map((item, index) => {
            return (
              <div className={styles.skill} key={`etc index_${index}`}>
                <div>{item.name}</div>
                <progress
                  className={`${styles.progressTag} ${styles.progressEtc}`}
                  value={`${item.expert}`}
                  max="100"
                ></progress>
                <span className={styles.explan}>{item.explan}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
