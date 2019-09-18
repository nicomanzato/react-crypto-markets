export const LOAD_CRYPTOCURRENCIES = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY';
export const LOAD_CRYPTOCURRENCIES_SUCCESS = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY SUCCESS';
export const LOAD_CRYPTOCURRENCIES_FAIL = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY FAIL';

export const LOAD_CRYPTOCURRENCY_DETAILS = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY DETAILS';
export const LOAD_CRYPTOCURRENCY_DETAILS_SUCCESS = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY DETAILS SUCCESS';
export const LOAD_CRYPTOCURRENCY_DETAILS_FAIL = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY DETAILS FAIL';

export const LoadCryptocurrencies = () => {
  return { type: LOAD_CRYPTOCURRENCIES };
};

export const LoadCryptocurrenciesSuccess = payload => {
  return { type: LOAD_CRYPTOCURRENCIES_SUCCESS, payload };
};

export const LoadCryptocurrenciesFail = payload => {
  return { type: LOAD_CRYPTOCURRENCIES_FAIL, payload };
};

export const LoadCryptocurrencyDetails = payload => {
  return { type: LOAD_CRYPTOCURRENCY_DETAILS, payload };
};

export const LoadCryptocurrencyDetailsSuccess = payload => {
  return { type: LOAD_CRYPTOCURRENCY_DETAILS_SUCCESS, payload };
};

export const LoadCryptocurrencyDetailsFail = payload => {
  return { type: LOAD_CRYPTOCURRENCY_DETAILS_FAIL, payload };
};
