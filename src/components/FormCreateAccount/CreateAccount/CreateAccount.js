import React, {Component} from 'react';

import classes from './CreateAccount.css';
import { Button, FormGroup, FormControl, ControlLabel, Form , NavDropdown, MenuItem, Nav } from "react-bootstrap";

class Login extends Component {

    handleSelect(eventKey) {
        // event.preventDefault();
        alert(`selected ${eventKey}`);
    }

    render (){
        return (
            <div className={classes.CreateAccount} >
                <h4><strong> account creation </strong></h4>

                <div>
                    <Form inline>
                        <ControlLabel>Your credentials</ControlLabel>{' '}
                        <p> E-mail</p>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" placeholder="Your e-mail........." />
                        </FormGroup>{' '}

                        <p> Password </p>
                        <FormGroup controlId="formInlineEmail">
                            <FormControl type="email" placeholder="Your password........." />
                        </FormGroup>{' '}

                        <ControlLabel>Your personal information</ControlLabel>{' '}
                        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)} >
                            <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                                <MenuItem eventKey="4.1">Action</MenuItem>
                                <MenuItem eventKey="4.2">Another action</MenuItem>
                                <MenuItem eventKey="4.3">Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4.4">Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        
                        
                    </Form>
                </div>
            </div>
        );
    }
}


export default Login;