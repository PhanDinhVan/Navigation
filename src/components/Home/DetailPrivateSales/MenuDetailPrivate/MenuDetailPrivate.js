import React, { Component } from 'react';

import classes from './MenuDetailPrivate.css';
import { Grid, Row, Col, Thumbnail, Carousel } from "react-bootstrap";
import SideBar from '../../../SideBar/SideBar';

class Menu extends Component {

    state = {
        showSideBar: false
    }

    sideBarCloseHandler = () =>  {
        this.setState({showSideBar: false})
    }

    sideBarOpenHandler = () =>  {
        this.setState({showSideBar: true})
    }
    
    render () {
        const imageMenu = require('../../../../assets/images/private_sale/' + this.props.src_detail);
        return (
            <header className={classes.MenuDeatilPrivate} >
                <Grid bsClass={classes.Grid}>
                    <Row bsClass={classes.Row} >
                        <Col md={4} className={classes.Col} >
                            <Thumbnail src={imageMenu} 
                                className={classes.Thumbnail}
                                onClick={this.props.clickDetailPrivte} >
                                
                            </Thumbnail>
                            <Carousel.Caption bsClass={classes.TopLeft} >
                                <div >
                                    <SideBar open={this.state.showSideBar} closed={this.sideBarCloseHandler} />
                                    <a href="/home" >
                                        <span 
                                            className="glyphicon glyphicon-menu-left" 
                                            style={{fontSize: '30px', color: 'white'}}
                                            > </span>
                                    </a>
                                    
                                    <span onClick={this.sideBarOpenHandler}
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
    }
    
    
};

export default Menu;