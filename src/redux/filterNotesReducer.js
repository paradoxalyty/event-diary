import { ADD_FILTER_NAME, ADD_FILTER_MOOD, CLEAR_FILTERS } from './constants';

const initialState = {
  filterName: '',
  filterMood: '',
};

export const filterNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER_NAME:
      return { ...state, filterName: action.payload };
    case ADD_FILTER_MOOD:
      return { ...state, filterMood: action.payload };
    case CLEAR_FILTERS:
      return { ...state, filterName: '', filterMood: '' };
    default:
      return state;
  }
};
