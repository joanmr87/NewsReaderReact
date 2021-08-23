import React from "react";

import themes from "../themes/Theme.module.css";
import styles from "../styles/styles.module.css"
const { Brown, Summer } = themes;




const RadioButtons = (props) => {
  return (
    <div className={styles.ThemeRadioContainer}>
      <div className={styles.ThemeRadioItem}>
        <input
          type="radio"
          id="radio-DarkA"
          name="radio-DarkA"
          value="DarkA"
          checked={props.theme === Summer}
          onChange={() => props.setTheme(Brown)}
        />
        <label htmlFor="radio-DarkA">Theme A</label>
      </div>

      <div className={styles.ThemeRadioItem}>
        <input
          type="radio"
          id="radio-DarkB"
          name="radio-DarkB"
          value="DarkB"
          checked={props.theme === Brown}
          onChange={() => props.setTheme(Summer)}
        />
        <label htmlFor="radio-DarkB">Theme B</label>
      </div>
    </div>
  );
};

export default RadioButtons;
