import React, {Component} from 'react';

import classes from './Login.css';
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";

class Login extends Component {
    render (){
        return (
            <div className={classes.Login} >
                <h4><strong> Login </strong></h4>

                <div>
                    <Form inline>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" placeholder="Your e-mail........." />
                        </FormGroup>{' '}
                        <FormGroup controlId="formInlineEmail">
                            <FormControl type="email" placeholder="Your password........." />
                            <div className={classes.Right} >
                                <a>Forgot your password?</a>
                            </div>
                        </FormGroup>{' '}
                        
                        <Button type="submit" >OK</Button>
                    </Form>
                </div>
            </div>
        );
    }
}


export default Login;