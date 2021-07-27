import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  NEW_IMG_DATA,
  CLEAR_FORM,
} from './constants';

const today = new Date().toISOString().substr(0, 10).toString();

const initialState = {
  id: '',
  name: '',
  mood: '',
  date: today,
  description: '',
  imgData: {
    imgUrl: '',
    imgAuthor: '',
    imgSrcLarge: '',
  },
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
    case NEW_IMG_DATA:
      return { ...state, imgData: action.payload };
    case CLEAR_FORM:
      return {
        ...state,
        id: '',
        name: '',
        mood: '',
        date: today,
        description: '',
        imgData: {
          imgUrl: '',
          imgAuthor: '',
          imgSrcLarge: '',
        },
      };
    default:
      return state;
  }
};
