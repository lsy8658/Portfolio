import React, { useEffect, useRef, useState } from "react";
import TextAnimation from "../../components/textAnimation/TextAnimation";
import "./profile.scss";
export default function Profile() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    const callback = (entry) => {
      entry.forEach((e) => {
        console.log(e);
      });
    };
    if (target) {
      observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => {
      observer && observer.disconnet();
    }; // html요소 감지
  }, [target]);

  return (
    <>
      <div className="profile_section">
        <h2 className="title">🙂Profile</h2>
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
        </div>
      </div>
      <div className="profile_section">
        <h2 className="title">📝Skills</h2>
        <div className="skills">
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <h1>skill</h1>
          <div ref={setTarget}>skill</div>
        </div>
      </div>
    </>
  );
}
