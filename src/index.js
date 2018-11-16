import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

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