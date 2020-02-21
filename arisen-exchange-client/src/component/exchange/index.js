import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import Home from './home';

export default function ExchangeHome() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
        )
}