import React, { useEffect, useState } from "react";
import "./darkmodeToggle.scss";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("color-theme", "dark");
  }, []);

  const darkmodehandler = () => {
    const darkMode = document.documentElement.getAttribute("color-theme");
    if (darkMode === "dark") {
      document.documentElement.setAttribute("color-theme", "light");
      setDark(false);
    } else {
      document.documentElement.setAttribute("color-theme", "dark");
      setDark(true);
    }
  };
  return (
    <div className="darkmode_container" onClick={darkmodehandler}>
      <button
        className={dark ? "light" : "dark"}
        aria-label="dark mode button"
      ></button>
    </div>
  );
}
