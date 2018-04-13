import React, { Component } from 'react';

import Menu from '../Home/Menu/Menu';
import Auxs from '../../hoc/Auxs';
import ContentContact from './ContentContact/ContentContact';

class Contact extends Component {
    render () {
        return (
            <Auxs>
                <Menu />
                <ContentContact />
            </Auxs>
        )
    }
}

export default Contact;