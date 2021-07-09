import {
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from './constants';

const initialState = {
  fetchedImages: [],
  loading: false,
  error: false,
  searchQuery: 'nature',
  searchValue: '',
};

export const fetchImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_IMAGES_SUCCESS:
      const fetchedImages = action.payload.photos;
      return {
        ...state,
        fetchedImages,
        loading: false,
        error: false,
      };
    case FETCH_IMAGES_FAILURE:
      console.log(action.payload);
      return {
        loading: false,
        error: true,
      };
    case 'NEW_SEARCH_VALUE':
      console.log(action);
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
