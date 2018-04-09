import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import FormLogin from '../FormLogin/FormLogin';
import FormCreateAccount from '../FormCreateAccount/FormCreateAccount';
import ListButton from './ListButton/ListButton';
import Home from '../Home/Home';
import DetailPrivateSales from '../Home/DetailPrivateSales/DetailPrivateSales';


const buttonsInstance = (props) => (
    
    <Router>
        <div>
            <Route path="/" exact component={ListButton} /> 
            <Route path="/login" component={FormLogin} />
            <Route path="/create" component={FormCreateAccount} />
            <Route path="/home" component={Home} />
            <Route path="/detailprivatesale" component={DetailPrivateSales} />
        </div>
    </Router>

);


export default buttonsInstance;