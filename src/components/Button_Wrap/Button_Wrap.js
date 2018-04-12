import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import FormLogin from '../FormLogin/FormLogin';
import FormCreateAccount from '../FormCreateAccount/FormCreateAccount';
import ListButton from './ListButton/ListButton';
import Home from '../Home/Home';
import DetailPrivateSales from '../Home/DetailPrivateSales/DetailPrivateSales';
import DetailNews from '../Home/DetailNews/DetailNews';
import MyAccount from '../MyAccount/MyAccount';
import LegalNotice from '../LegalNotice/LegalNotice';
import SalesPolicy from '../SalesPolicy/SalesPolicy';
import Contact from '../Contact/Contact';


const buttonsInstance = (props) => (
    
    <Router>
        <div>
            <Route path="/" exact component={ListButton} /> 
            <Route path="/login" component={FormLogin} />
            <Route path="/create" component={FormCreateAccount} />
            <Route path="/home" component={Home} />
            <Route path="/detailprivatesale" component={DetailPrivateSales} />
            <Route path="/detailnew" component={DetailNews} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/legalnotice" component={LegalNotice} />
            <Route path="/salespolicy" component={SalesPolicy} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>

);


export default buttonsInstance;