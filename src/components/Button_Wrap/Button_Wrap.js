import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import FormLogin from '../FormLogin/FormLogin';
import FormCreateAccount from '../FormCreateAccount/FormCreateAccount';
import ListButton from './ListButton/ListButton';


const buttonsInstance = (props) => (
    
    <Router>
        <div>
            <Route path="/" exact component={ListButton} /> 
            <Route path="/login" component={FormLogin} />
            <Route path="/create" component={FormCreateAccount} />
        </div>
    </Router>

);


export default buttonsInstance;