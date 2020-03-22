import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

export const Routes: React.SFC = () => (
    <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/details/:movieName" component={Details} />
    </React.Fragment>
);
