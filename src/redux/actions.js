import { API_KEY } from '../api/api';
import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  NEW_IMG_DATA,
  VALIDATE_NAME,
  VALIDATE_PHOTO,
  CLEAR_FORM,
  NEW_SEARCH_VALUE,
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  LOAD_LOCAL_DATA,
  SAVE_LOCAL_DATA,
  DELETE_FROM_LOCAL_NOTES,
  ADD_FILTER_NAME,
  ADD_FILTER_MOOD,
  CLEAR_FILTERS,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_MODAL_DATA,
} from './constants';

export const addNewName = (payload) => {
  return { type: NEW_NAME, payload };
};

export const addNewMood = (payload) => {
  return { type: NEW_MOOD, payload };
};

export const addNewDate = (payload) => {
  return { type: NEW_DATE, payload };
};

export const addNewDescription = (payload) => {
  return { type: NEW_DESCRIPTION, payload };
};

export const addNewImgData = (payload) => {
  return { type: NEW_IMG_DATA, payload };
};

export const validateName = () => {
  return { type: VALIDATE_NAME };
};

export const validatePhoto = () => {
  return { type: VALIDATE_PHOTO };
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
  const API_URL = `https://api.pexels.com/v1/search?query=${searchQuery}&orientation=landscape&page_1&per_page=20`;

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
      console.warn(error);
      dispatch(requestImagesError(error));
    }
  };
};

const loadLocalData = (payload) => {
  return { type: LOAD_LOCAL_DATA, payload };
};

export const loadFromLocalStorage = () => {
  return async (dispatch) => {
    try {
      const serialisedState = localStorage.getItem('localNotes');

      if (serialisedState === null) return undefined;
      const localData = JSON.parse(serialisedState);

      dispatch(loadLocalData(localData));
    } catch (error) {
      console.warn(error);
      return undefined;
    }
  };
};

export const saveToLocalStorage = (payload) => {
  return { type: SAVE_LOCAL_DATA, payload };
};

export const deleteFromLocalNotes = (payload) => {
  return { type: DELETE_FROM_LOCAL_NOTES, payload };
};

export const addFilterName = (payload) => {
  return { type: ADD_FILTER_NAME, payload };
};

export const addFilterMood = (payload) => {
  return { type: ADD_FILTER_MOOD, payload };
};

export const clearFilters = () => {
  return { type: CLEAR_FILTERS };
};

export const openModal = () => {
  return { type: OPEN_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

export const addModalData = (payload) => {
  return { type: ADD_MODAL_DATA, payload };
};
