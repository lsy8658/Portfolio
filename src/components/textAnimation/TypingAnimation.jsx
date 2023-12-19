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
              "2023",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "UXUI",
              2000,
              "FrontEnd Developer",
              2000,
              "PORTFOLIO",
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
