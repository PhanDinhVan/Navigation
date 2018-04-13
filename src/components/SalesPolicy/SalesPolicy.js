import React, { Component } from 'react';

import Auxs from '../../hoc/Auxs';
import Menu from '../Home/Menu/Menu';
import ContentSalesPolicy from '../SalesPolicy/ContentSalesPolicy/ContentSalesPolicy';

class SalesPolicy extends Component {
    render () {
        return (
            <Auxs>
                <Menu />
                <ContentSalesPolicy />
            </Auxs>
        )
    }
} 

export default SalesPolicy;