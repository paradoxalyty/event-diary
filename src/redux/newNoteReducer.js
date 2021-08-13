import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  NEW_IMG_DATA,
  VALIDATE_NAME,
  VALIDATE_PHOTO,
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
    isPhotoAdded: false,
  },
  isNameValid: true,
  isPhotoValid: true,
};

export const newNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_NAME:
      return { ...state, name: action.payload };
    case NEW_MOOD:
      return { ...state, mood: action.payload };
    case NEW_DATE:
      return { ...state, date: action.payload };
    case NEW_DESCRIPTION:
      return { ...state, description: action.payload };
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
          isPhotoAdded: false,
        },
        isNameValid: true,
        isPhotoValid: true,
      };
    case VALIDATE_NAME:
      return state.name.length
        ? { ...state, isNameValid: true }
        : { ...state, isNameValid: false };
    case VALIDATE_PHOTO:
      return state.imgData.isPhotoAdded
        ? { ...state, isPhotoValid: true }
        : { ...state, isPhotoValid: false };
    default:
      return state;
  }
};
