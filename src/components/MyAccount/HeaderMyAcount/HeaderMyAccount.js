import React from 'react';

import classes from './HeaderMyAccount.css';
import navigationLogo from '../../../assets/images/amagumo-logo-small-black.png';

const header = (props) => {
    
    return (
        <header className={classes.Header} >
            <a href="/home" >
                <span 
                    className="glyphicon glyphicon-menu-left" 
                    style={{fontSize: '30px'}}
                    ></span>
            </a>
            
            <div className={classes.Logo} >
                {/* <a href="/" > */}
                    <img src={navigationLogo} alt="Navigation" />
                {/* </a> */}
            </div>
        </header>
    )
}
    
export default header;