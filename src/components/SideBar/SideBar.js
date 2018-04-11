import React from 'react';

import classes from './SideBar.css'
import Backdrop from '../UI/Backdrop/Backdrop';
import Auxs from '../../hoc/Auxs';

const sideBar = (props) => {
    let attachedClasses = [classes.SideBar, classes.Close];
    if( props.open ) {
        attachedClasses = [classes.SideBar, classes.Open];
    }
    return ( 
        <Auxs>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <div>
                    <h2>menu</h2>
                    
                    <span className="glyphicon glyphicon-remove" 
                        style={{fontSize: '30px'}} onClick={props.closed}
                            ></span>
                </div>
                <hr />
                <div className={classes.MenuContent} >
                    <ul>
                        <li>Home</li>
                        <li>My Account</li>
                        <li>My Private Sales</li>
                    </ul>
                </div>
            </div>
        </Auxs>
        
    )
}

export default sideBar;