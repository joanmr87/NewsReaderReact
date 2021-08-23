import React from "react";
import styles from "../styles/Header.module.css";
import classnames from "classnames";

import logo from "../data/images/logo1.png";
import userIcon from "../data/images/user-icon.png";

import themes from "../themes/Theme.module.css";

const { Brown, Summer } = themes;

const Header = (props) => (
  <header className={classnames(styles.header)}>
    <img
      className={classnames(styles.header__img)}
      src={logo}
      alt="Platzi Video"
    />

    <div className={classnames(styles.header__menu)}>
      <span>
        <div>
          <input
            type="radio"
            id="radio-Dark"
            name="radio-Dark"
            value="Dark"
            checked={props.theme === Brown}
            onChange={() => {
                if (props.theme === Brown) {
                  props.setTheme(Summer);
                } else {
                  props.setTheme(Brown);
            }}}
          />
          <label htmlFor="radio-Dark">Dark</label>


          <input
            type="radio"
            id="radio-Light"
            name="radio-Light"
            value="Light"
            checked={props.theme === Summer}
            onChange={() => {
                if (props.theme === Summer) {
                  props.setTheme(Brown);
                } else {
                  props.setTheme(Summer);
            }}}
          />
          <label htmlFor="radio-Light">Light</label>
        </div>
      </span>

      <div className={classnames(styles.header__menu_profile)}>
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>

      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;

/*<button
onClick={() => {
  if (props.theme === Summer) {
    props.setTheme(Brown);
  } else {
    props.setTheme(Summer);
  }
}}
type="button"
>
Change Theme
</button>*/
