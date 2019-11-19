import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';

const Pages = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Pages;