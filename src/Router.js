import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { constants } from './constants/constants';

import MarketsPage from './pages/Markets/Markets.page';
import CryptocurrencyDetailPage from './pages/CryptocurrencyDetail/CryptocurrencyDetail.page';

export const Router = () => {
  return (
    <Switch>
      <Route exact path={constants.ROUTES.CRYPTOCURRENCY_DETAIL} component={CryptocurrencyDetailPage} />
      <Route component={MarketsPage} />
    </Switch>
  );
};
