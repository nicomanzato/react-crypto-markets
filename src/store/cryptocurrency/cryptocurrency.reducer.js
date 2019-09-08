import {
  LOAD_CRYPTOCURRENCIES,
  LOAD_CRYPTOCURRENCIES_SUCCESS,
  LOAD_CRYPTOCURRENCIES_FAIL,
} from './cryptocurrency.actions';

const initialState = {
  isLoadingCryptocurrencies: false,
  cryptocurrencies: [],
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
    default:
      return state;
  }
};
