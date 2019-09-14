import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';

//import { Footer } from './components/footer/footer';
import { Header } from './components/Header/Header';
import { Background } from './components/Background/Background';
import { Router } from './Router';

const App = ({ LoadCryptocurrencies }) => {
  useEffect(() => {
    LoadCryptocurrencies();
  }, [LoadCryptocurrencies]);
  return (
    <React.StrictMode>
      <div className="app">
        <Background />
        <Header />
        <Router />
      </div>
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
