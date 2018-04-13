import React from 'react';

import { Label, ControlLabel, FormGroup, FormControl, Form, Col, Button } from "react-bootstrap";
import classes from '../../../assets/css/menubottom.css'

const contentContact = (props) => (
    <div className={classes.Content} >
        
        <Col md={4} >
            <Label className={classes.Label} > contact </Label>
            <Form>
                <ControlLabel className={classes.ControlLabel} >Choose your topic</ControlLabel>{' '}
                <FormGroup >
                    <FormControl componentClass="select" >
                        <option value="select"> </option>
                        <option value="select">Topic 1</option>
                        <option value="select">Topic 2</option>
                        <option value="select">Topic 3</option>
                        <option value="select">Topic 4</option>
                    </FormControl>
                </FormGroup>{' '}

                <ControlLabel className={classes.ControlLabel} >Your message</ControlLabel>{' '}
                <FormGroup controlId="formTextarea">
                    <FormControl componentClass="textarea" 
                        placeholder="Please enter your message" 
                        rows="5" />
                </FormGroup>{' '}

                <FormGroup >
                    <Button bsSize="large" block className={classes.ButtonSend} >send</Button>
                </FormGroup>{' '}
            </Form>
        </Col>
        
        
    </div>
);

export default contentContact;