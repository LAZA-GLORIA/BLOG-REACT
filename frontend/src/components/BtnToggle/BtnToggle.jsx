import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./BtnToggle.css";

export default function BtnToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
        className={theme ? "" : "dark-btn"}
      >
        {" "}
        Change{" "}
      </button>
      {theme ? "LIGHT" : "DARK"}
    </div>
  );
}
