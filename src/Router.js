import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { constants } from './constants/constants';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ConnectedRouter } from 'connected-react-router'

import { history } from './store';

import MarketsPage from './pages/markets/markets.page';
import CryptocurrencyDetailPage from './pages/cryptocurrency-detail/cryptocurrency-detail.page';

import './Router.scss';

const routes = [
  { path: constants.ROUTES.CRYPTOCURRENCY_MARKETS, key: 'Market', Component: MarketsPage },
  { path: constants.ROUTES.CRYPTOCURRENCY_DETAIL, key: 'CryptocurrencyDetail', Component: CryptocurrencyDetailPage },
];

export const Router = ({ className }) => {
  return (
    <div className={className}>
      <TransitionGroup>
        <CSSTransition
          key={history.location.key}
          classNames={'page'}
          timeout={500}
        >
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => {
                    return <Component match={match} history={history} />;
                  }}
                </Route>
              ))}
            </Switch>
          </ConnectedRouter>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Router;