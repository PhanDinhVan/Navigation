import React from 'react';

import classes from './PrivateSales.css';
import { Grid, Row, Col, Thumbnail, Carousel, Label, Image } from "react-bootstrap";
import DetailPrivateSales from '../DetailPrivateSales/DetailPrivateSales';


const contentHome = (props) => { 
    
    return (
    <div>
        <Grid bsClass={classes.Grid}>
            <Row bsClass={classes.Row} >
                {
                    props.image.map((img, idx) => {
                        const src_image = require('../../../assets/images/private_sale/' + img);
                        return (
                            <Col md={4} key={`${img}-${idx}`} bsClass={classes.Col} >
                                <Thumbnail src={src_image}
                                className={classes.Thumbnail} 
                                onClick={() => props.clickDetailPrivte(img)} >
                                
                                </Thumbnail>
                            </Col>
                        );
                    })
                }
            </Row>
        </Grid>
        
    </div>
    
)}; 

export default contentHome;