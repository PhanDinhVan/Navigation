import React from 'react';

import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import classes from './ListButton.css';
import navigationLogo from '../../../assets/images/amagumo-logo-small-black.png';

const listButton = (props) => (
    <FormGroup>
        <div className={classes.Logo} >
            <img src={navigationLogo} alt="Navigation" />
        </div>

        <div className={classes.Button} >
            <Button 
                className={classes.Button_Login} 
                bsStyle="primary" bsSize="large" block 
                href="/login" > LOGIN
            </Button>
            
            <Button 
                className={classes.Button_Create} 
                bsSize="large" block
                href="/create" > CREATE YOUR ACCOUNT
            </Button> 
        </div>
        
    </FormGroup> 
);

export default listButton;