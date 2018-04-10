import React from 'react';

import MenuDetailNew from './MenuDetailNew/MenuDetailNew';
import DetailNew from './DetailNew/DetailNew';

const detailNews = (props) => {
    // console.log(props.location.state.referrer)
    return (
        <div>
            <MenuDetailNew />
            <DetailNew nameImage={props.location.state.referrer} />
        </div>
    )
}

export default detailNews;