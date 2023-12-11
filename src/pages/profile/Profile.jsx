import { useState } from "react";
import TextAnimation from "../../components/textAnimation/TypingAnimation";
import "./profile.scss";
import ScrollTopButton from "../../components/scrollTopButton/ScrollTopButton";
export default function Profile() {
  const [showInfo, setShowInfo] = useState(true);
  const showInfoHandel = () => {
    setShowInfo(!showInfo);
  };
  return (
    <>
      <div className="profile_section">
        <h2 className="title">Profile</h2>
        <div className="profile_text_wrap">
          <TextAnimation text={"Sung yoon | Front-end"} time={100} />
        </div>
        <div className="info">
          <p>안녕하세요 🙂</p>
          <p>가상 공간 안에서 타인을 위한 서비스를 제작하는 웹에 매력을 느낀</p>
          <p>웹 프론트엔드 개발자 이성윤입니다.</p>
        </div>
        <div className="my_history">
          <p>🏫 한성 고등학교 졸업</p>
          <p>🎓 백석 예술대학교 졸업</p>
          <p>📬 dltjddbs8658@naver.com</p>
        </div>
        <div className="company_container">
          <div className="company">
            <h4 className="title">
              주식회사더벗 <span>주임연구원</span>
              <p>2022. 08 ~ 2023. 08</p>
            </h4>
            <div className={`projects ${showInfo ? "active" : ""}`}>
              <div className="main">
                <div className="text">
                  <p>디자인 작업물에 대한 </p>
                  <p>( React.js, Vue.js ) SPA 개발</p>
                </div>

                <button onClick={showInfoHandel}>
                  {showInfo ? "Close" : "Show"}
                </button>
              </div>

              <div className="project">
                <div className="project_name">
                  ( 커리어 디자인 ) - 2022.08 ~ 2023.01 : 진로설계, 학업설계,
                  수요조사 서비스 퍼블리싱 및 개발
                </div>
                <div className="process">
                  <p>
                    1. 개발환경 - React, Typescript, Redux, React
                    Router,javascript
                  </p>
                  <p>
                    2. 수행 업무 및 역할 - 개선 및 솔루션 제안 - 디자인 작업물에
                    대한 React.js SPA 개발 - 반응형 스타일 페이지 적용
                  </p>
                  <p>3. 인력 구성 및 기여도: 2명 (기여도 80%)</p>
                </div>
              </div>
              <div className="project">
                <div className="project_name">
                  ( 민군관제 ) - 2023.01 ~ 2023.08 : 드론 관제 사이트 퍼블리싱
                  및 개발
                </div>
                <div className="process">
                  <p>1. 개발환경 - Vue3, Typescript, Pinia, javascript</p>
                  <p>
                    2. 수행 업무 및 역할 - 개선 및 솔루션 제안, 디자인 작업물에
                    대한 Vue.js SPA 개발 <br /> 실시간으로 드론의 Telemetry를
                    받아 위치 표시 및 각 구역 CRUD 작업 ( google map - marker,
                    polyline, polygon 이용하여 지도에 표시 ) <br /> - 날씨 api
                    를 활용한 시간별 날씨 표시 <br />- i18n 다국어 설정
                  </p>
                  <p>3. 기여도 : 50%</p>
                </div>
              </div>
              <div className="project">
                <div className="project_name">
                  ( 코비 에디터 ) - 2023.07 ~ 2023.08 : 에디터 도움말 페이지
                  퍼블리싱
                </div>
                <div className="process">
                  <p>1. 개발환경 - Html5, Css3, javascript</p>
                  <p>2. 수행 업무 및 역할 - 디자인 작업물에 대한 웹 퍼블리싱</p>
                  <p>3. 기여도 : 100%</p>
                </div>
              </div>
              <div className="project">
                <div className="project_name">
                  ( 5gx ) - 2023.06 ~ 2023.08 : 인접 드론 입체적으로 표시
                </div>
                <div className="process">
                  <p>1. 개발환경 - Vue2, Typescript, canvas js</p>
                  <p>
                    2. 수행 업무 및 역할 - 인접 드론 접근 시 알림 팝업에 내 드론
                    위치와 상대 드론의 위치를 화면에 입체적으로 표시
                  </p>
                  <p>3. 기여도 : 80%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="company only">
            <h4 className="title">
              타라소프트(주) <span>주임</span>
              <p>2020. 08 ~ 2021. 07</p>
            </h4>
            <div className="projects">
              <p>
                - 일러스트, 포토샵, 피그마등을 이용한 웹 사이트 디자인 및 로고
                디자인
              </p>
              <p>
                - 디자인 작업물에 대한 PC/ Mobile 반응형 웹 사이트 퍼블리싱 및
                유지보수
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </>
  );
}
