import React from 'react';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classes from './Button_Wrap.css';


const buttonsInstance = (props) => (
    <Router>
        <div className={classes.Button_Wrap} >
            {/* <form> */}
                <FormGroup>
                    <Button className={classes.Button_Login} to="/login" bsStyle="primary" bsSize="large" block onClick={props.clicked_login}>
                        LOGIN
                    </Button>
                    <Button className={classes.Button_Create} to="/create" bsSize="large" block onClick={props.clicked_create}>
                        CREATE YOUR ACCOUNT
                    </Button> 
                </FormGroup>
            {/* </form> */}
        </div>
    </Router>
    
);


export default buttonsInstance;