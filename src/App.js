import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';

import Header from './components/header/header';
import { Footer } from './components/footer/footer';
import SidePanel from './components/side-panel/side-panel';
import { Router } from './Router';

import { withRouter } from 'react-router-dom';

const App = ({ LoadCryptocurrencies, SetBrowserHistory, history }) => {
  useEffect(() => {
    LoadCryptocurrencies();
  }, [LoadCryptocurrencies]);

  return (
    <React.StrictMode>
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
