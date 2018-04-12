import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from '../Home/Menu/Menu';

class SalesPolicy extends Component {
    render () {
        return (
            <Auxs>
                <Menu />
                <h1 style={{marginTop: "72px"}} >SalesPolicy</h1>
            </Auxs>
        )
    }
} 

export default SalesPolicy;