export const LOAD_CRYPTOCURRENCIES = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY';
export const LOAD_CRYPTOCURRENCIES_SUCCESS = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY SUCCESS';
export const LOAD_CRYPTOCURRENCIES_FAIL = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY FAIL';

export const LoadCryptocurrencies = () => {
  return { type: LOAD_CRYPTOCURRENCIES };
};

export const LoadCryptocurrenciesSuccess = payload => {
  return { type: LOAD_CRYPTOCURRENCIES_SUCCESS, payload };
};

export const LoadCryptocurrenciesFail = payload => {
  return { type: LOAD_CRYPTOCURRENCIES_FAIL, payload };
};
