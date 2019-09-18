export const SHOW_CRYPTOCURENCY_DETAILS_MODAL = '[UI] SHOW CRYPTOCURRENCY DETAILS MODAL';
export const HIDE_CRYPTOCURENCY_DETAILS_MODAL = '[UI] HIDE CRYPTOCURRENCY DETAILS MODAL';

export const ShowCryptocurrencyDetailsModal = () => {
  return { type: SHOW_CRYPTOCURENCY_DETAILS_MODAL };
};

export const HideCryptocurrencyDetailsModal = () => {
  return { type: HIDE_CRYPTOCURENCY_DETAILS_MODAL };
};
