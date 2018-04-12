import React, { Component } from 'react';

import Menu from '../Home/Menu/Menu';
import Auxs from '../../hoc/Auxs';

class Contact extends Component {
    render () {
        return (
            <Auxs>
                <Menu />
                <h1>Contact</h1>
            </Auxs>
        )
    }
}

export default Contact;