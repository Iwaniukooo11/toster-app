import React from 'react';
import locStyles from './Nav.module.scss'

const Nav = () => {
    return (
        <header className={locStyles.nav}>
            <h1 className={locStyles.navHead}>Toster Maker</h1>
        </header>
    );
}

export default Nav;