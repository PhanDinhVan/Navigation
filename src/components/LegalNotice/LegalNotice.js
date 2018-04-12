import React, { Component } from 'react';

import Menu from '../Home/Menu/Menu';
import Auxs from '../../hoc/Auxs';
import ContentLegalNotice from './ContentLegalNotice/ContentLegalNotice';


class LegalNotice extends Component {
    render () {
        return (
            <Auxs>
                <Menu />
                <ContentLegalNotice />
            </Auxs>
            
        )
    }
}

export default LegalNotice;