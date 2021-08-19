import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  CHANGE_SEARCH_VALUE,
} from './constants';

const initialState = {
  fetchedImages: [],
  loading: false,
  error: false,
  searchQuery: 'landscape',
  searchValue: '',
  currentPage: 1,
  prevPage: null,
  nextPage: null,
  totalPages: null,
};

export const fetchImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case FETCH_IMAGES_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        fetchedImages: action.payload.fetchedImages,
        currentPage: action.payload.currentPage,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
        totalPages: action.payload.totalPages,
        loading: false,
        error: false,
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
