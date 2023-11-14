import React, { useEffect, useState } from "react";
import "./textAnimation.scss";
export default function TextAnimation(props) {
  const [aniText, setAniText] = useState("");
  const [count, setCount] = useState(0);
  const { text, time } = props;

  useEffect(() => {
    const textInterval = setInterval(
      () => {
        setAniText(aniText + text[count]);
        setCount(count + 1);
      },
      time ? time : 200
    );

    if (count === text.length) {
      clearInterval(textInterval);
    }

    return () => clearInterval(textInterval);
  });

  return (
    <div className="text_ani_container">
      <h2 className="text">{aniText}</h2>
      <span className="cursor">|</span>
    </div>
  );
}

/*
 setinterval 작동 중지 과정 필요 
*/
