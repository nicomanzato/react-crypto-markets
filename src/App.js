import React, { useEffect } from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Router } from './Router';

const App = ({
  LoadCryptocurrencies,
  shouldDisplayCryptocurrencyDetailsModal,
  HideCryptocurrencyDetailsModal,
  detailedCryptocurrency,
}) => {
  useEffect(() => {
    LoadCryptocurrencies();
  }, [LoadCryptocurrencies]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Router />
          <Footer />
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
