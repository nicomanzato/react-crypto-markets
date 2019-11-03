import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { constants } from './constants/constants';

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
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match, history }) => {
              return <Component match={match} history={history} />;
            }}
          </Route>
        ))}
      </Switch>
    </div>
  );
};
