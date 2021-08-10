import React from 'react';
import styles from '../styles/Header.module.css';
import classnames from 'classnames';

import logo from '../data/images/logo1.png';
import userIcon from '../data/images/user-icon.png';

const Header = () => (
    <header className={classnames(styles.header)}>
        <img className={classnames(styles.header__img)} src={logo} alt="Platzi Video"/>
            <div className={classnames(styles.header__menu)}>
                <div className={classnames(styles.header__menu_profile)}>
                    <img src={ userIcon } alt=""/>
                        <p>Perfil</p>
            </div>
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </div>
  </header>
            );

export default Header