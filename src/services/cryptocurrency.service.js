import Axios from 'axios';

import { constants } from '../constants/constants';

import CryptocurrencyMock from './mock/cryptocurrency.mock.json';

export const getCryptocurrencies = async () => {
  let data;

  if (process.env.NODE_ENV === 'development') {
    data = (await Axios.get(process.env.REACT_APP_CRYPTOCURRENCY_API + constants.ENDPOINTS.GET_CRYPTOCURRENCIES)).data;
  } else {
    data = CryptocurrencyMock;
  }

  return data;
};
