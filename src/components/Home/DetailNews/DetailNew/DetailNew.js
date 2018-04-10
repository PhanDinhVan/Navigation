import React from 'react';

import classes from './DetailNew.css';
import { Grid, Row, Col, Thumbnail, Label } from "react-bootstrap";


const detailNew = (props) => {
    const src_image = require('../../../../assets/images/news/' + props.nameImage);
    return (
        <div className={classes.DetailNew} >
            <Label className={classes.Label} >detail</Label>
            <Grid style={{marginTop: "10px"}} >
                <Row >
                    <Col >
                        <div className={classes.Text} >
                            <h4>Ronnie Fieg : New collab with Moncler</h4>
                            <p>Subtitle</p>
                            <p>By Lorem – Nov 24, 2017</p>
                        </div>
                        
                        <Thumbnail src={src_image} className={classes.Thumbnail} > </Thumbnail>

                        <div className={classes.Text} >
                            <p>
                                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                                Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                                Ipsum Dolor Sit Amet
                            </p>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                                Sit Amet Lorem Ipsum Dolor Sit Amet Lorem
                            </p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default detailNew;