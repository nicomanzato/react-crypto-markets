import { constants } from '../constants/constants';
import { genericGet } from '../utils/utils';

import CryptocurrenciesMock from './mock/cryptocurrencies.mock.json';
import CryptocurrencyMock from './mock/cryptocurrency.mock.json';

export const getCryptocurrencies = async () => {
  return genericGet(
    { url: process.env.REACT_APP_CRYPTOCURRENCY_API + constants.ENDPOINTS.GET_CRYPTOCURRENCIES },
    CryptocurrenciesMock
  );
};

export const getCryptocurrency = async cryptocurrencyId => {
  return genericGet(
    {
      url:
        process.env.REACT_APP_CRYPTOCURRENCY_API +
        constants.ENDPOINTS.GET_CRYPTOCURRENCY.replace('{cryptocurrencyId}', cryptocurrencyId.toLowerCase()),
    },
    CryptocurrencyMock
  );
};
