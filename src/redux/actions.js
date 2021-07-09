import { API_KEY } from '../api/api';
import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  NEW_IMG_URL,
  NEW_IMG_AUTHOR,
  NEW_IMG_ID,
  CLEAR_FORM,
  NEW_SEARCH_VALUE,
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  LOAD_LOCAL_DATA,
  SAVE_LOCAL_DATA,
} from './constants';

export const addNewName = (newValue) => {
  return { type: NEW_NAME, name: newValue };
};

export const addNewMood = (newValue) => {
  return { type: NEW_MOOD, mood: newValue };
};

export const addNewDate = (newValue) => {
  return { type: NEW_DATE, date: newValue };
};

export const addNewDescription = (newValue) => {
  return { type: NEW_DESCRIPTION, description: newValue };
};

export const addNewImgUrl = (newValue) => {
  return { type: NEW_IMG_URL, imgUrl: newValue };
};

export const addNewImgAuthor = (newValue) => {
  return { type: NEW_IMG_AUTHOR, imgAuthor: newValue };
};

export const addNewImgId = (newValue) => {
  return { type: NEW_IMG_ID, imgId: newValue };
};

export const clearFormData = () => {
  return { type: CLEAR_FORM };
};

export const addSearchValue = (payload) => {
  return {
    type: NEW_SEARCH_VALUE,
    payload,
  };
};

const requestImages = () => {
  return { type: FETCH_IMAGES_STARTED, payload: 'start' };
};

const requestImagesSuccess = (data) => {
  return { type: FETCH_IMAGES_SUCCESS, payload: data };
};

const requestImagesError = (error) => {
  return { type: FETCH_IMAGES_FAILURE, payload: error };
};

export const fetchImages = (searchQuery) => {
  const API_URL = `https://api.pexels.com/v1/search?query=${searchQuery}&orientation=landscape&page_1&per_page=12`;

  return async (dispatch) => {
    try {
      dispatch(requestImages());

      const responce = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });

      const data = await responce.json();
      dispatch(requestImagesSuccess(data));
    } catch (error) {
      dispatch(requestImagesError(error));
    }
  };
};

const loadLocalData = (localData) => {
  return { type: LOAD_LOCAL_DATA, payload: localData };
};

export const loadFromLocalStorage = () => {
  return async (dispatch) => {
    try {
      const serialisedState = localStorage.getItem('localNotes');

      if (serialisedState === null) return undefined;
      const localData = JSON.parse(serialisedState);

      dispatch(loadLocalData(localData));
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  };
};

export const saveToLocalStorage = (newNote) => {
  return { type: SAVE_LOCAL_DATA, payload: newNote };
};

export const filterNotes = (payload) => {
  return { type: 'FILTER_LOCAL_DATA', payload };
};
