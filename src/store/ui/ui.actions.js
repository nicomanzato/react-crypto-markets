export const SHOW_CRYPTOCURENCY_DETAILS_MODAL = '[UI] SHOW CRYPTOCURRENCY DETAILS MODAL';
export const HIDE_CRYPTOCURENCY_DETAILS_MODAL = '[UI] HIDE CRYPTOCURRENCY DETAILS MODAL';

export const MOVE_TO_PAGE = '[UI] MOVE TO PAGE';
export const SET_BROWSER_HISTORY = '[UI] SET BROWSER HISTORY';

export const ShowCryptocurrencyDetailsModal = () => {
  return { type: SHOW_CRYPTOCURENCY_DETAILS_MODAL };
};

export const HideCryptocurrencyDetailsModal = () => {
  return { type: HIDE_CRYPTOCURENCY_DETAILS_MODAL };
};

export const MoveToPage = payload => {
  return { type: MOVE_TO_PAGE, payload };
};
