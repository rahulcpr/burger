import React from 'react';
import Aux from '../../hoc/Aox';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>
             {props.children}
        </main>
    </Aux>
);

export default layout;