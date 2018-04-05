import React, {Component} from 'react';

import Auxs from '../../hoc/Auxs';
import Button_Wrap from '../../components/Button_Wrap/Button_Wrap';

class NavigationBuilder extends Component {

    render () {
        return (
            <Auxs>
                <Button_Wrap />
            </Auxs>
        );
    }
}

export default NavigationBuilder;