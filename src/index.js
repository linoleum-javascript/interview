import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-input-range/lib/css/index.css';

import store from './store';

import ApartmentSearch from './components/ApartmentSearch';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={ApartmentSearch} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
);