//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Personal Modules
// import {startGetUserSession} from 'app/actions/account'
import Router from 'app/router/';

//App CSS
require('applicationStyles');

// For react-redux
import {configure} from 'configureStore';
var store = configure();

//render
ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
);
