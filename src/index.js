import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux'

import store from './redux/store-redux'
import { getTotalAmount } from './redux/Reducers/Cart-Slice';

store.dispatch(getTotalAmount())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
