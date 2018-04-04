import React from 'react';
import Auxs from '../../hoc/Auxs';
import classes from './Layout.css';

const layout = (props) => (
    <Auxs>
        {/* <main className={classes.Content} > */}
        
        <main>
            {props.children}
        </main>
    </Auxs>
);

export default layout;