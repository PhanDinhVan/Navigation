import React from 'react';

import classes from './ContentHome.css';
import { 
    Tabs, 
    Tab } from "react-bootstrap";

const contentHome = (props) => (

    <div className={classes.ContentHome} >
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="PRIVATE SALES" className={classes.Tab} >
                PRIVATE SALES
            </Tab>
            <Tab eventKey={2} title="NEWS" className={classes.Tab} >
                NEWS
            </Tab>
        </Tabs>
    </div>
    
); 

export default contentHome;