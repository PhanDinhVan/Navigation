import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from './Menu/Menu';
import classes from './Home.css';
import { Tabs, Tab } from "react-bootstrap";
import PrivateSales from './PrivateSales/PrivateSales';
import { Redirect } from "react-router-dom";
import News from './News/News';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            detailPrivate: false,
            images: [
                "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"
            ],
            imgMenuDetail: null,
            news_image: [
                "new1.jpg", "new2.png", "new3.jpg", "new4.jpg"
            ]
        };
    }

    detailPrivateSales = (img) => {
        this.setState({
            detailPrivate: true,
            // get name img cho Menu
            imgMenuDetail: img
        });
    }

    render () {

        let redirectDetailPrivate = null;
        // show detail private sale
        if (this.state.detailPrivate) {
            redirectDetailPrivate = <Redirect to={{pathname: "/detailprivatesale", 
                state: { referrer: this.state.imgMenuDetail }}}/>;
        }

        return ( 
            <Auxs>
                {redirectDetailPrivate}
                <Menu />
                <div className={classes.Home} >
                    <Tabs defaultActiveKey={1} animation={false} id="home" >
                        <Tab eventKey={1} title="PRIVATE SALES" >
                            <PrivateSales clickDetailPrivte={this.detailPrivateSales}
                                image={this.state.images} />
                        </Tab>
                        <Tab eventKey={2} title="NEWS" >
                            <News a={this.state.news_image} />
                        </Tab>
                    </Tabs>
                </div>
            </Auxs>
        );
    }
}

export default Home;