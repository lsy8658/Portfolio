import React, { useEffect, useState } from "react";
import "./textAnimation.scss";
export default function TextAnimation(props) {
  const [aniText, setAniText] = useState("");
  const { text } = props;

  const textLen = text.split("");
  const aniTextLen = aniText.split("");

  const textInterval = () => {
    if (textLen.length === aniTextLen.length) {
      clearInterval(textInterval);
      return;
    }
    const txt = aniText + textLen[aniTextLen.length];

    setAniText(txt);
    console.log("aniText =>", aniText);
  };

  setInterval(textInterval, 1000);

  return (
    <div className="container">
      <h2 className="text">{aniText}</h2>
      <span className="cursor">|</span>
    </div>
  );
}
