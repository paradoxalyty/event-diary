import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  NEW_IMG_URL,
  NEW_IMG_AUTHOR,
  NEW_IMG_ID,
  CLEAR_FORM,
} from './constants';

const today = new Date().toISOString().substr(0, 10).toString();

const initialState = {
  name: '',
  mood: '',
  date: today,
  description: '',
  imgUrl: '',
  imgAuthor: '',
  imgId: '',
};

export const newDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_NAME:
      return { ...state, name: action.newValue };
    case NEW_MOOD:
      return { ...state, mood: action.newValue };
    case NEW_DATE:
      return { ...state, date: action.newValue };
    case NEW_DESCRIPTION:
      return { ...state, description: action.newValue };
    case NEW_IMG_URL:
      return { ...state, imgUrl: action.newValue };
    case NEW_IMG_AUTHOR:
      return { ...state, imgAuthor: action.newValue };
    case NEW_IMG_ID:
      return { ...state, imgId: action.newValue };
    case CLEAR_FORM:
      return {
        ...state,
        name: '',
        mood: '',
        date: today,
        description: '',
        imgUrl: '',
        imgAuthor: '',
        imgId: '',
      };
    default:
      return state;
  }
};
