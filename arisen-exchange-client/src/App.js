import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './component/authentication/login';
import Signup from './component/authentication/signup';
import ExchangeHome from './component/exchange/index';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ExchangeHome} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
        );
      }
    }
    
    export default App;
