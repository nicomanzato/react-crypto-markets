import React, { useEffect } from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';

//import { Footer } from './components/footer/footer';
import Header from './components/Header/Header';
import { Router } from './Router';

const App = ({
  LoadCryptocurrencies,
  shouldDisplayCryptocurrencyDetailsModal,
  HideCryptocurrencyDetailsModal,
  detailedCryptocurrency,
}) => {
  useEffect(() => {
    LoadCryptocurrencies();
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = {
  LoadCryptocurrencies: () => LoadCryptocurrencies(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
