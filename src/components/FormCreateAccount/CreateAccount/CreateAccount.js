import React, {Component} from 'react';

import classes from './CreateAccount.css';
import { 
        FormGroup, 
        FormControl, 
        ControlLabel, 
        Form } from "react-bootstrap";



class CreateAccount extends Component {

    yearHandel() {
        var currentYear = new Date().getFullYear();
        var years = [];
        var startYear = 1980;

        while ( startYear <= currentYear ) {
                years.push(startYear++);
        } 

        return years;
    };
    

    render (){

        // list month
        const moment = require('moment');
        let month = moment.months();

        // list year
        // {this.yearHandel}


        return (
            <div className={classes.CreateAccount} >
                <h4><strong> account creation </strong></h4>

                <div>
                    <Form>
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
                        <FormGroup>
                            <div className="clearfix" >
                                <FormControl componentClass="select" className="pull-left" style={{width: "30%"}} >
                                    <option value="select">Miss</option>
                                    <option value="other">...</option>
                                </FormControl>
                                <FormControl componentClass="select" className="pull-right" style={{width: "30%"}} >
                                    <option value="select">Title</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </div>
                        </FormGroup>
                        

                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" />
                        </FormGroup>{' '}

                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" />
                        </FormGroup>{' '}

                        <p>Birthday</p>
                        <FormGroup >
                            <div className="row" >
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" >
                                        <option value="select">{new Date().getDate()  }</option>
                                        
                                    </FormControl>
                                </div>
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" >
                                    {   
                                        month.map((el, i) => {
                                            return <option value={ el } key={ i } 
                                            defaultValue ={ (new Date().getMonth() === i) ? 'selected' : ''} >{ el }</option>
                                        })
                                    }
                                    </FormControl>
                                </div>
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" onClick={this.yearHandel} >
                                        <option value="select">{new Date().getFullYear() }</option>
                                        {
                                            //Stop
                                        }
                                    </FormControl>
                                </div>
                                
                            </div>
                        </FormGroup>{' '}

                        <p>Your sponsor’s email</p>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" />
                        </FormGroup>{' '}
                    </Form>
                </div>
            </div>
        );
    }
}


export default CreateAccount;