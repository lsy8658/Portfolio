import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./emailform.scss";
export default function EmailForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TMEPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((data) => {
        alert("메일 전송완료!");
      })
      .catch((error) => {
        console.log("error => ", error);
        alert("메일 전송실패!");
      });
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="email_container">
      <div className="input_box">
        <label htmlFor="name">Name:</label>
        <input type="text" name="user_name" id="name" />
      </div>
      <div className="input_box">
        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" id="email" />
      </div>
      <div className="input_box">
        <label htmlFor="msg">Message:</label>
        <textarea id="msg" name="message" draggable />
      </div>

      <input type="submit" value="Send" className="send" />
    </form>
  );
}
