import React from 'react';

import classes from './Menu.css';
import navigationLogo from '../../../assets/images/amagumo-logo-small-black.png';

const menu = (props) => (
    <header className={classes.Menu} >
        {/* <a href="/" > */}
            <span 
                className="glyphicon glyphicon-menu-hamburger" 
                style={{fontSize: '30px'}}
                 ></span>
        {/* </a> */}
        
        <div className={classes.Logo} >
            {/* <a href="/" > */}
                <img src={navigationLogo} alt="Navigation" />
            {/* </a> */}
        </div>
    </header>
);

export default menu;