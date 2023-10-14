import React from "react";
import { useState } from "react";

const DarkMode = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (
    <div className={useDarkMode ? "dark-mode dark" : "dark-mode light"}>
      <h1>Dark Mode</h1>
      <label>
        <input
          type="checkbox"
          onChange={(event) => {
            let nextValue = !useDarkMode;
            setUseDarkMode(nextValue);;
          }}
        />{" "}
        Use dark mode?
      </label>
    </div>
  );
};

export default DarkMode;
