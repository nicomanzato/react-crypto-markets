import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';
import { HideCryptocurrencyDetailsModal } from './store/ui/ui.actions';

//import { Footer } from './components/footer/footer';
import { Header } from './components/Header/Header';
import { Background } from './components/Background/Background';
import { CryptocurrencyDetailsModal } from './components/CryptocurrencyDetailsModal/CryptocurrencyDetailsModal';
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
      <>
        <div className="app">
          <Background />
          <Header />
          <Router />
        </div>
        <CryptocurrencyDetailsModal
          data={detailedCryptocurrency}
          shouldDisplay={shouldDisplayCryptocurrencyDetailsModal}
          onClose={HideCryptocurrencyDetailsModal}
        />
      </>
    </React.StrictMode>
  );
};

function mapStateToProps(state, props) {
  return {
    shouldDisplayCryptocurrencyDetailsModal: state.UIReducer.shouldDisplayCryptocurrencyDetailsModal,
    detailedCryptocurrency: state.CryptocurrencyReducer.detailedCryptocurrency,
  };
}

const mapDispatchToProps = {
  LoadCryptocurrencies: () => LoadCryptocurrencies(),
  HideCryptocurrencyDetailsModal: () => HideCryptocurrencyDetailsModal(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
