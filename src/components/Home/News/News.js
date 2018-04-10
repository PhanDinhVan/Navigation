import React from 'react';

import classes from './News.css';

import { Grid, Row, Col, Thumbnail, Image, Carousel } from "react-bootstrap";

const news = (props) => {
    
    return (
        <div>
            <Grid bsClass={classes.Grid}>
                <Row>
                    {
                        props.obj.map((el, idx) => {
                            const src_image = require('../../../assets/images/news/' + el.img);
                            if( idx === 0 ){
                                return (
                                    <Col md={4} key={`${el.img}-${idx}`} className={classes.Col} >
                                        <Thumbnail src={src_image} 
                                            className={classes.Thumbnail}
                                            onClick={() => props.clickDetailNew(el.img)} >
                                        </Thumbnail>
                                        <Carousel.Caption bsClass={classes.Caption} >
                                            <h4 onClick={() => props.clickDetailNew(el.img)} >{el.title} : {el.content}</h4>
                                        </Carousel.Caption>
                                     </Col>
                                );
                            }
                            else {
                                return (
                                    <div key={`${el.img}-${idx}`} className={classes.ContentBellow} >
                                        <ul style={{marginTop: '10px', marginRight: '5px'}} >
                                            <li style={{width: '100%'}} >
                                                <div className={classes.NewsBox} >
                                                    <span>
                                                        <h4 onClick={() => props.clickDetailNew(el.img)} >{el.title}</h4>
                                                        <p onClick={() => props.clickDetailNew(el.img)} >{el.content}</p>
                                                    </span>
                                                    <span className={classes.NewsBoxImage} >
                                                        <Image key={`${el.img}-${idx}`} 
                                                            src={src_image} 
                                                            onClick={() => props.clickDetailNew(el.img)} />
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                );
                            }
                        })
                    }
                    
                </Row>
            </Grid>
        </div>
    )
}

export default news;