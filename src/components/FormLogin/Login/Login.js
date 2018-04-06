import React, {Component} from 'react';

import classes from './Login.css';
import { Button, FormGroup, FormControl, ControlLabel, Form } from "react-bootstrap";
import FormCreateAccount from '../../FormCreateAccount/FormCreateAccount';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { Route, Redirect } from 'react-router'


class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email: "",
            password: "",
            auth: false,
            users: [
                {
                    email: "admin@gmail.com",
                    password: "1"
                },
                {
                    email: "user@gmail.com",
                    password: "1"
                }
            ]
        };
    }

    
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = event => {

        event.preventDefault();
        try {
            let email = this.state.email;
            let password = this.state.password;
            let checkUser = false;
            // debugger;
            for (var i = 0; i < this.state.users.length; i++) {

                let user = this.state.users[i];

                if (user.email === email && user.password === password ) {
                    checkUser = true;
                    { break; }
                }
            }

            if(checkUser){
                this.setState({
                    auth: true
                });
            } else {
                alert("E-mail or password incorrect");
            }
        } catch (e) {
            alert(e.message);
        }
    }
    

    render (){
        let redirect = null;
        if (this.state.auth) {
            redirect = <Redirect to="/home"/>;
        }
        return (
            <div className={classes.Login} >
                {redirect}
                <h4><strong> Login </strong></h4>

                <div>
                    <Form inline>
                        <FormGroup controlId="email">
                            <FormControl tplaceholder="Your e-mail........."
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                 />
                        </FormGroup>{' '}
                        <FormGroup controlId="password">
                            <FormControl placeholder="Your password........."
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password" />
                            <div className={classes.Right} >
                                <a>Forgot your password?</a>
                            </div>
                        </FormGroup>{' '}
                        
                        <Button 
                            // block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            onClick={this.handleSubmit} >OK</Button>
                    </Form>
                </div>
            </div>
        );
    }
}


export default Login;