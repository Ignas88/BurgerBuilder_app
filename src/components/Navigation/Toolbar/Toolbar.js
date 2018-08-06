import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
         <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
);

export default toolbar;