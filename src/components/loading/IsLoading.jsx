import React from "react";
import "./isLoading.scss";

export default function IsLoading() {
  return (
    <div className="loading_container">
      <h2 className="loading_text">잠시만 기다려주세요.</h2>
      <img src={"/assets/gifs/gif01.gif"} alt="" />
    </div>
  );
}
