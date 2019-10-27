import React from 'react';
import { Route } from 'react-router-dom';
import { constants } from './constants/constants';
import { CSSTransition } from 'react-transition-group';

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
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match, history }) => {
            return (
              <CSSTransition in={match != null} timeout={600} classNames="page" unmountOnExit>
                <Component match={match} history={history} />
              </CSSTransition>
            );
          }}
        </Route>
      ))}
    </div>
  );
};
