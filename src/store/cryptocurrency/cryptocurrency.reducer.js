import {
  LOAD_CRYPTOCURRENCIES,
  LOAD_CRYPTOCURRENCIES_SUCCESS,
  LOAD_CRYPTOCURRENCIES_FAIL,
  LOAD_CRYPTOCURRENCY_DETAILS,
  LOAD_CRYPTOCURRENCY_DETAILS_SUCCESS,
  LOAD_CRYPTOCURRENCY_DETAILS_FAIL,
} from './cryptocurrency.actions';

const initialState = {
  isLoadingCryptocurrencies: false,
  cryptocurrencies: [],

  isLoadingCryptocurrencyDetail: false,
  detailedCryptocurrency: {},
};

export const CryptocurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CRYPTOCURRENCIES: {
      return { ...state, isLoadingCryptocurrencies: true };
    }

    case LOAD_CRYPTOCURRENCIES_SUCCESS: {
      return { ...state, cryptocurrencies: action.payload, isLoadingCryptocurrencies: false };
    }

    case LOAD_CRYPTOCURRENCIES_FAIL: {
      return { ...state, isLoadingCryptocurrencies: false };
    }

    case LOAD_CRYPTOCURRENCY_DETAILS: {
      return { ...state, isLoadingCryptocurrencyDetail: true };
    }

    case LOAD_CRYPTOCURRENCY_DETAILS_SUCCESS: {
      return { ...state, isLoadingCryptocurrencyDetail: false, detailedCryptocurrency: action.payload[0] };
    }

    case LOAD_CRYPTOCURRENCY_DETAILS_FAIL: {
      return { ...state, isLoadingCryptocurrencyDetail: false };
    }

    default:
      return state;
  }
};
