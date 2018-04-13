import React, { Component } from 'react';

import classes from './MenuDetailNew.css';
import navigationLogo from '../../../../assets/images/amagumo-logo-small-black.png';
import SideBar from '../../../SideBar/SideBar';

class MenuDetailNew extends Component {

    state = {
        showSideBar: false
    }

    sideBarCloseHandler = () =>  {
        this.setState({showSideBar: false})
    }

    sideBarOpenHandler = () =>  {
        this.setState({showSideBar: true})
    }

    render () {
        return (
            <header className={classes.Menu} >
                <SideBar open={this.state.showSideBar} closed={this.sideBarCloseHandler} />
                <a href="/home" >
                    <span 
                        className="glyphicon glyphicon-menu-left" 
                        style={{fontSize: '30px'}}
                        > </span>
                </a>

                <a>
                    <span onClick={this.sideBarOpenHandler}
                        className="glyphicon glyphicon-menu-hamburger" 
                        style={{fontSize: '30px'}}
                        ></span>
                </a>
                
                <div className={classes.Logo} >
                    <img src={navigationLogo} alt="Navigation" />
                </div>
            </header>
        )
    }
} 

export default MenuDetailNew;