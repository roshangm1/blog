import React, { useState, useEffect } from "react";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  useEffect(() => {
    setIsDarkModeOn(
      !!(
        window.localStorage.getItem("darkMode") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
    );
  }, []);

  function turnDarkMode() {
    const bodyEl = document.getElementsByTagName("body")[0];
    setIsDarkModeOn(!isDarkModeOn);
    if (window) {
      isDarkModeOn
        ? bodyEl.classList.add("dark")
        : bodyEl.classList.remove("dark");
      window.localStorage.setItem("darkMode", isDarkModeOn);
    }
  }

  return (
    <div className={styles["switch__container"]}>
      <span className={styles["switch__text"]}>Night Mode</span>
      <label className={styles["switch"]}>
        <input
          id="DarkModeSwitcher"
          type="checkbox"
          defaultChecked={!isDarkModeOn}
        />
        <span
          className={`${styles["slider"]}`}
          onClick={() => turnDarkMode()}
        />
      </label>
    </div>
  );
};

export default Switcher;
