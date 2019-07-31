import React from 'react';
import locStyles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={locStyles.nav}>
            <h1 className={locStyles.navHead}>Toster Maker</h1>
        </nav>
    );
}

export default Nav;