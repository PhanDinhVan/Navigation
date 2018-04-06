import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from './Menu/Menu';
import classes from './Home.css';
import { Tabs, Tab } from "react-bootstrap";
import ContentHome from './ContentHome/ContentHome';

class Home extends Component {
    render () {
        return ( 
            <Auxs>
                <Menu />
                {/* <ContentHome /> */}
                <div className={classes.Home} >
                    <Tabs defaultActiveKey={1} animation={false} id="home" >
                        <Tab eventKey={1} title="PRIVATE SALES" >
                            <ContentHome />
                        </Tab>
                        <Tab eventKey={2} title="NEWS" >
                            NEWS
                        </Tab>
                    </Tabs>
                </div>
            </Auxs>
        );
    }
}

export default Home;