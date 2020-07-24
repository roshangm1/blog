import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  useEffect(() => {
    const dark = window.localStorage.getItem("darkMode");
    setIsDarkModeOn(dark ? JSON.parse(dark) : true);
  }, []);

  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    isDarkModeOn === true
      ? bodyEl.classList.add("dark")
      : bodyEl.classList.remove("dark");
  }, [isDarkModeOn]);

  function setIsDarkMode(value) {
    const bodyEl = document.getElementsByTagName("body")[0];
    setIsDarkModeOn(value);
    value ? bodyEl.classList.add("dark") : bodyEl.classList.remove("dark");
    window.localStorage.setItem("darkMode", value);
  }

  return (
    <div className={styles["switch__container"]}>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkModeOn}
        size={50}
        speed={2}
      />
    </div>
  );
};

export default Switcher;
