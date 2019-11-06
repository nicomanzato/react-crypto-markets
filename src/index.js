import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import 'typeface-montserrat';
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom';

import ProviderWithRouter from './ProviderWithRouter';
import { store } from './store';
//import * as serviceWorker from './serviceWorker';
require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <ProviderWithRouter>
      <App />
    </ProviderWithRouter>
  </BrowserRouter>,
  document.getElementById('root')
);
