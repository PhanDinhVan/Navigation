import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from './Menu/Menu';
import classes from './Home.css';
import { Tabs, Tab } from "react-bootstrap";
import PrivateSales from './PrivateSales/PrivateSales';
import { Redirect } from "react-router-dom";
import News from './News/News';
import SideBar from '../SideBar/SideBar';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            detailPrivate: false,
            images: [
                "img1.png", "img2.png", "img3.png", "img4.png", "image5.jpg"
            ],
            imgMenuDetail: null,
            objImg: [
                {title: "Ronnie Fieg", content: "New collab with Moncler", img: "new1.png"},
                {title: "Entertainment", content: "Lorem Ipsum Dolor Sit Amet", img: "new2.png"},
                {title: "Fashion", content: "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet", img: "new3.png"},
                {title: "Fashion", content: "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet", img: "new4.png"},
            ],
            detailNew: false,
            key: 1,
            imgNewDetail: null
        };
    }

    detailPrivateSales = (img) => {
        this.setState({
            detailPrivate: true,
            // get name img cho Menu
            imgMenuDetail: img
        });
    }

    detailNews = (img) => {
        this.setState({
            detailNew: true,
            imgNewDetail: img
        });
    }

    handleSelect = (key) => {
        // alert(`selected ${key}`);
        this.setState({ key });
    }

    render () {

        let redirectDetailPrivate = null;
        // show detail private sale
        if (this.state.detailPrivate) {
            redirectDetailPrivate = <Redirect to={{pathname: "/detailprivatesale", 
                state: { referrer: this.state.imgMenuDetail }}}/>;
        }

        let redirectDetailNew = null;
        if (this.state.detailNew) {
            redirectDetailNew = <Redirect to={{pathname: "/detailnew", 
                state: { referrer: this.state.imgNewDetail }}}/>;
        }

        return ( 
            <Auxs>
                {redirectDetailPrivate}
                {redirectDetailNew}
                <Menu />
                <div className={classes.Home} >
                    <Tabs defaultActiveKey={1} animation={false} onSelect={this.handleSelect} id="home" >
                        <Tab eventKey={1} title="PRIVATE SALES" >
                            <PrivateSales clickDetailPrivte={this.detailPrivateSales}
                                image={this.state.images} />
                        </Tab>
                        <Tab eventKey={2} title="NEWS" >
                            <News obj={this.state.objImg}
                            clickDetailNew={this.detailNews} />
                        </Tab>
                    </Tabs>
                </div>
            </Auxs>
        );
    }
}

export default Home;