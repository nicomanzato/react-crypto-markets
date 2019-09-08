import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { constants } from './constants/constants';

import MarketsPage from './pages/Markets/Markets.page';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route default component={MarketsPage} />
    </BrowserRouter>
  );
};
