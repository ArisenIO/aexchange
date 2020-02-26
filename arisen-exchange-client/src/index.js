import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import './theme.css';
import './custom.css';
import store from './store/mainStore';


ReactDOM.render(
  <Provider mainStore={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);