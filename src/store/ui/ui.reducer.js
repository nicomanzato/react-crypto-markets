import { SHOW_CRYPTOCURENCY_DETAILS_MODAL, HIDE_CRYPTOCURENCY_DETAILS_MODAL } from './ui.actions';

const initialState = {
  shouldDisplayCryptocurrencyDetailsModal: false,
  history: null,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CRYPTOCURENCY_DETAILS_MODAL: {
      return { ...state, shouldDisplayCryptocurrencyDetailsModal: true };
    }

    case HIDE_CRYPTOCURENCY_DETAILS_MODAL: {
      return { ...state, shouldDisplayCryptocurrencyDetailsModal: false };
    }

    default:
      return state;
  }
};
