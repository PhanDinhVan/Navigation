import React from 'react';

import classes from './ContentHome.css';
import { Grid, Row, Col, Thumbnail, Carousel, Label } from "react-bootstrap";

import image1 from '../../../assets/images/private_sale/image1.jpg';
import image2 from '../../../assets/images/private_sale/image2.jpg';
import image3 from '../../../assets/images/private_sale/image3.jpg';
import image4 from '../../../assets/images/private_sale/image4.jpg';
import image5 from '../../../assets/images/private_sale/image5.jpg';

const contentHome = (props) => (

    <div>
        <Grid bsClass={classes.Grid}>
            <Row>
                <Col md={4}>
                    <Thumbnail src={image1} className={classes.Thumbnail} >
                        
                    </Thumbnail>
                    
                    
                </Col>
                <Col md={4}>
                    <Thumbnail src={image2} className={classes.Thumbnail} >
                        
                    </Thumbnail>
                    <Carousel.Caption bsClass={classes.Carousel} >
                        <div className={classes.Bottomleft}>
                            <Label bsClass={classes.Label} > registered </Label>
                        </div>
                    </Carousel.Caption>
                </Col>
                <Col md={4}>
                    <Thumbnail src={image3} className={classes.Thumbnail} >
                        
                    </Thumbnail>
                    <Carousel.Caption bsClass={classes.Carousel} >
                        <div className={classes.Bottomleft}>
                            <Label bsClass={classes.Label} > be notified </Label>
                        </div>
                    </Carousel.Caption>
                </Col>
                <Col md={4}>
                    <Thumbnail src={image4} className={classes.Thumbnail} >
                        
                    </Thumbnail>
                    <Carousel.Caption bsClass={classes.Carousel} >
                        <div className={classes.Bottomleft}>
                            <Label bsClass={classes.Label} > be notified </Label>
                        </div>
                    </Carousel.Caption>
                </Col>
                <Col md={4}>
                    <Thumbnail src={image5} className={classes.Thumbnail} >
                        
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    </div>
    
); 

export default contentHome;