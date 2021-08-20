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
  CHANGE_SEARCH_VALUE,
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

export const changeSearchValue = (payload) => {
  return {
    type: CHANGE_SEARCH_VALUE,
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

export const fetchImages = (searchQuery, currentPage) => {
  return async (dispatch) => {
    try {
      dispatch(requestImages());

      const url = getUrl(searchQuery, currentPage);
      const imagesWithMeta = await loadImages(url);

      dispatch(requestImagesSuccess(imagesWithMeta));
    } catch (error) {
      console.warn(error);
      dispatch(requestImagesError(error));
    }
  };
};

const getUrl = (searchQuery, currentPage) => {
  return `https://api.pexels.com/v1/search?query=${searchQuery}&orientation=landscape&page=${currentPage}&per_page=10`;
};

const getData = async (url) => {
  const responce = await fetch(url, {
    headers: { Authorization: API_KEY },
  });
  return responce.json();
};

const loadImages = async (url) => {
  const data = await getData(url);
  return converseData(data);
};

const converseData = (data) => {
  // const fetchedImages = data.photos;
  // const currentPage = data.page;
  // const totalResult = data.total_results;
  const { photos: fetchedImages, page: currentPage, total_results: totalResult } = data;

  const totalPages = parseInt(totalResult / 10);

  let prevPage = currentPage - 1;
  let nextPage = currentPage + 1;

  if (currentPage === 1) {
    prevPage = totalPages;
  }

  if (currentPage === totalPages) {
    nextPage = 1;
  }

  let isFetched = false;
  if (fetchedImages.length) {
    isFetched = true;
  }

  return {
    isFetched,
    fetchedImages,
    currentPage,
    prevPage,
    nextPage,
    totalPages,
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
