import React, { useEffect, useState } from "react";
import "./darkmodeToggle.scss";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("color-theme", "light");
  }, []);

  const darkmodehandler = () => {
    const darkMode = document.documentElement.getAttribute("color-theme");
    if (darkMode === "light") {
      document.documentElement.setAttribute("color-theme", "dark");
      setDark(true);
    } else {
      document.documentElement.setAttribute("color-theme", "light");
      setDark(false);
    }
  };
  return (
    <div className="darkmode_container" onClick={darkmodehandler}>
      <button className={dark && "dark"}></button>
    </div>
  );
}
