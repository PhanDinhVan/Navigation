import React from 'react';

import MenuDetailPrivate from './MenuDetailPrivate/MenuDetailPrivate';
import DetailPrivateSale from './DetailPrivateSale/DetailPrivateSale';
import classes from './DetailPrivateSales.css';


const detailPrivateSales = (props) => {
    
    // get name image from Home Redirect use props.location.state.referrer
    return (
        <div>
            <MenuDetailPrivate src_detail={props.location.state.referrer} />
            <div className={classes.DetailPrivateSale} >
                <DetailPrivateSale />
            </div>
        </div>
    );
    
}


export default detailPrivateSales;