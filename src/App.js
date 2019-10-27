import React, { useEffect } from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';

import Header from './components/header/header';
import { Footer } from './components/footer/footer';
import { SidePanel } from './components/side-panel/side-panel';
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
          <div className="app__content">
            <div className="app__side-panel-container">
              <SidePanel className="app__side-panel" />
            </div>
            <Router className="app__router" />
          </div>
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
