import { OPEN_MODAL, CLOSE_MODAL, ADD_MODAL_DATA } from './constants';

const initialState = {
  isOpen: false,
  defaultValue: {
    modalMood: '',
    modalName: '',
    modalDate: '',
    modalImgUrl: '',
    modalImgAuthor: '',
    modalDescription: '',
  },
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };

    case ADD_MODAL_DATA:
      return { ...state, defaultValue: action.payload };
    default:
      return state;
  }
};
