import React, { Component } from 'react';

import HeaderMyAccount from './HeaderMyAcount/HeaderMyAccount';
import Account from './Account/Account';

class MyAccount extends Component {
    render () {
        return (
            <div>
                <HeaderMyAccount />
                <Account />
            </div>
        )
    }
}

export default MyAccount;