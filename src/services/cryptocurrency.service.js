import Axios from 'axios';

import { constants } from '../constants/constants';

export const getCryptocurrencies = async () => {
  const { data } = await Axios.get(constants.ENDPOINTS.GET_CRYPTOCURRENCIES);
  return data;
};
