import React from 'react';

import { Label, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import classes from '../../../assets/css/menubottom.css'

const contentSalesPolicy = (props) => (
    <div className={classes.Content} >
        
        <Grid>
            <Label className={classes.Label} > sales policy </Label>
            <Row className="show-grid">
                <Col md={4} className={classes.Col} >
                    <h4> 1. Lorem Ipsum Dolor Sit Amet </h4>
                     <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                    Lorem Ipsum Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    
                </Col>

                <Col md={4} className={classes.Col} >
                <h4> 2. Lorem Ipsum Dolor Sit Amet </h4>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum</p>
                </Col>

                <Col md={4} className={classes.Col} >
                <h4> 3. Lorem Ipsum Dolor Sit Amet </h4>
                    <p>Quota by product’s category : 5 accessories, 10
                    ready-to-wear</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                    <p>Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    Dolor Sit Amet</p>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default contentSalesPolicy;