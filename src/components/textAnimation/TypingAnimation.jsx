import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./typingAnimation.scss";
export default function TextAnimation(props) {
  const [aniText, setAniText] = useState("");
  const [count, setCount] = useState(0);
  const { text, time } = props;

  useEffect(() => {
    if (text) {
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
    }
  });

  return (
    <div className="text_ani_container">
      <h2 className="text">
        {text ? (
          <>
            {aniText}
            <span className="cursor">|</span>
          </>
        ) : (
          <TypeAnimation
            className="text"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "더 나은",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "사용자 경험을 제공하기 위해",
              2000,
              "항상 고민하는",
              2000,
              "FrontEnd Developer",
              2000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
          />
        )}
      </h2>
    </div>
  );
}

/*
 setinterval 작동 중지 과정 필요 
*/
