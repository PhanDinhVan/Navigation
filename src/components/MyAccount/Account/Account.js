import React, {Component} from 'react';

import classes from './Account.css';
import { Button,
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

    handelNewAddress = () => {
        alert("No design ^_^")
    }
    

    render (){

        // list month
        const moment = require('moment');
        let month = moment.months();

        // list year
        // {this.yearHandel}


        return (
            <div className={classes.CreateAccount} >
                <h4><strong> my account </strong></h4>
                <p>Miss Lorem Ipsum</p>
                <p>Client code : CLIA00023885</p>

                <div>
                    <Form>
                        <ControlLabel>Your credentials</ControlLabel>{' '}
                        <p> E-mail</p>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="email" defaultValue="lorem.ipsum@gmail.com" />
                        </FormGroup>{' '}

                        <p> Password </p>
                        <FormGroup controlId="formInlineEmail">
                            <FormControl type="password" defaultValue="********" />
                        </FormGroup>{' '}

                        <ControlLabel>Your personal information</ControlLabel>{' '}
                        <FormGroup>
                            <div className="clearfix" >
                                <FormControl componentClass="select" className="pull-left" style={{width: "30%"}} >
                                    <option defaultValue="select">Miss</option>
                                    <option defaultValue="other">...</option>
                                </FormControl>
                                <FormControl componentClass="select" className="pull-right" style={{width: "30%"}} >
                                    <option defaultValue="select">Title</option>
                                    <option defaultValue="other">...</option>
                                </FormControl>
                            </div>
                        </FormGroup>
                        

                        <FormGroup controlId="formLorem">
                            <FormControl type="text" defaultValue="Lorem" />
                        </FormGroup>{' '}

                        <FormGroup controlId="formIpsum">
                            <FormControl type="text" defaultValue="Ipsum" />
                        </FormGroup>{' '}

                        <p>Birthday</p>
                        <FormGroup >
                            <div className="row" >
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" >
                                        <option defaultValue="select">{new Date().getDate()  }</option>
                                        
                                    </FormControl>
                                </div>
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" >
                                    {   
                                        month.map((el, i) => {
                                            return <option defaultValue={ el } key={ i } 
                                            defaultValue ={ (new Date().getMonth() === i) ? 'selected' : ''} >{ el }</option>
                                        })
                                    }
                                    </FormControl>
                                </div>
                                <div className="col-xs-4" >
                                    <FormControl componentClass="select" onClick={this.yearHandel} >
                                        <option defaultValue="select">{new Date().getFullYear() }</option>
                                        {
                                            //Stop
                                        }
                                    </FormControl>
                                </div>
                                
                            </div>
                        </FormGroup>{' '}

                        <ControlLabel>Your addresses book</ControlLabel>{' '}
                        <hr />
                        <div className={classes.NewAddress} >
                            <ControlLabel><h4>NEW ADDRESS</h4></ControlLabel>{' '}
                            <span 
                                className="glyphicon glyphicon-plus-sign" 
                                style={{fontSize: '25px', 
                                    position: 'absolute', 
                                    right: '10px', top: '7px'}}
                                onClick={this.handelNewAddress}
                                ></span>
                        </div> 
                        
                        <hr />
                        <FormGroup >
                            <Button bsSize="large" block >SAVE</Button>
                        </FormGroup>{' '}
                    </Form>
                </div>
            </div>
        );
    }
}

export default CreateAccount;