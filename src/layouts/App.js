import React from 'react';
import { Provider } from 'react-redux'

import Pages from './Pages';
import store from '../store';

function App() {
  return (<Provider store={store}>
      <Pages />
  </Provider>);
}

export default App;
