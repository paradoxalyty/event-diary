import { combineReducers } from 'redux';
import { newDataReducer } from './newNoteReducer';
import { fetchImagesReducer } from './fetchImagesReducer';
import { localDataReducer } from './localDataReducer';

export const rootReducer = combineReducers({
  newData: newDataReducer,
  fetchImages: fetchImagesReducer,
  localData: localDataReducer,
});