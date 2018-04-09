import React from 'react';

import classes from './MenuDetailPrivate.css';
import { Grid, Row, Col, Thumbnail, Carousel } from "react-bootstrap";

import image1 from '../../../../assets/images/private_sale/image1.jpg';

const menu = (props) => {
    const imageMenu = require('../../../../assets/images/private_sale/' + props.src_detail);
    return (
        <header className={classes.MenuDeatilPrivate} >
            <Grid bsClass={classes.Grid}>
                <Row>
                    <Col md={4} bsClass={classes.Col} >
                        <Thumbnail src={imageMenu} 
                            className={classes.Thumbnail}
                            onClick={props.clickDetailPrivte} >
                            
                        </Thumbnail>
                        <Carousel.Caption bsClass={classes.TopLeft} >
                            <div >
                                <a href="/home" >
                                    <span 
                                        className="glyphicon glyphicon-menu-left" 
                                        style={{fontSize: '30px', color: 'white'}}
                                        > </span>
                                </a>
                                
                                <span 
                                    className="glyphicon glyphicon-menu-hamburger" 
                                    style={{fontSize: '30px', color: 'white', float: 'right'}}
                                    ></span>
                            </div>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
    
};

export default menu;