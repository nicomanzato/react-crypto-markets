import React, { useEffect } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { LoadCryptocurrencies } from './store/cryptocurrency/cryptocurrency.actions';
import { MoveToPage } from './store/ui/ui.actions';

import Header from './components/header/header';
import { Footer } from './components/footer/footer';
import SidePanel from './components/side-panel/side-panel';
import Router from './Router';

const App = ({ LoadCryptocurrencies, SetBrowserHistory, MoveToPage }) => {
  useEffect(() => {
    LoadCryptocurrencies();
  }, [LoadCryptocurrencies]);

  const handleOnMoveToPage = pageURL => {
    MoveToPage(pageURL);
  };

  return (
    <React.StrictMode>
      <div className="app">
        <Header />
        <div className="app__content">
          <div className="app__side-panel-container">
            <SidePanel className="app__side-panel" onMoveToPage={handleOnMoveToPage} />
          </div>
          <div className="app__content-main">
            <Router className="app__router" />
            <Footer />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = {
  LoadCryptocurrencies: () => LoadCryptocurrencies(),
  MoveToPage: pageURL => MoveToPage(pageURL),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
