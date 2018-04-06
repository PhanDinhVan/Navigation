import React, { Component } from 'react';

import Menu from './Menu/Menu';
import ContentHome from './ContentHome/ContentHome';

class Home extends Component {
    render () {
        return ( 
            <div>
                <Menu />
                <ContentHome />
            </div>
        );
    }
}

export default Home;