import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import 'typeface-montserrat';
import { Provider } from 'react-redux';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
