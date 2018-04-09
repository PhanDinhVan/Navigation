import React from 'react';

import classes from './DetailPrivateSale.css';
import { Label, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import iconMap from '../../../../assets/images/Maps-icon.png';

const detailPrivateSale = (props) => {
    return (
        <div>
            <Label className={classes.Label} >SALES INFO</Label>
            <Grid className={classes.Grid} >
                <Row className="show-grid">
                    <Col md={4}>
                        <h3> Date </h3>
                        <span className="glyphicon glyphicon-time" style={{marginBottom: '10px'}} >
                        </span>  3 DAYS LEFT 
                        <p>Thursday December 1st : 9 am – 1 pm</p>
                        <p>Friday December 2 nd : 11 am – 5 pm</p>
                        
                    </Col>

                    <Col md={4}>
                    <h3> ADDRESS </h3>
                        <p>8 Rue de Valois 75001 Paris</p>
                        <Thumbnail src={iconMap} className={classes.Thumbnail} >

                        </Thumbnail>
                        <a href="https://www.google.com/maps" >
                            See your itinerary on Maps
                        </a>
                    </Col>

                    <Col md={4}>
                    <h3> SALE CONDITIONS </h3>
                        <p>Quota by product’s category : 5 accessories, 10
                        ready-to-wear</p>
                    </Col>
                </Row>
            </Grid>
        </div>
        
    );
}

export default detailPrivateSale;