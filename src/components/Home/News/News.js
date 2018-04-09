import React from 'react';

import classes from './News.css';


import { Grid, Row, Col, Thumbnail, Image } from "react-bootstrap";

const news = (props) => {
    return (
        <div>
            <Grid bsClass={classes.Grid}>
                <Row>
                    {
                        props.a.map((img, idx) => {
                            const src_image = require('../../../assets/images/news/' + img);
                            if( idx === 0 ){
                                return (
                                    // <Col md={4} key={`${img}-${idx}`} className={classes.Col} >
                                    //     <Thumbnail src={src_image} 
                                    //      className={classes.Thumbnail} >
                                        
                                    //     </Thumbnail>
                                    // </Col>
                                    <Image key={`${img}-${idx}`} src={src_image} responsive />
                                );
                            }
                            else {
                                return <Image key={`${img}-${idx}`} src={src_image} responsive />;
                            }
                            
                        })
                    }
                    
                </Row>
            </Grid>
        </div>
    )
}

export default news;