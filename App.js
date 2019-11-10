/**
 * @format
 * @flow
 */

import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './store/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
