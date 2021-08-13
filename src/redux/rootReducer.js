import { combineReducers } from 'redux';
import { newNoteReducer } from './newNoteReducer';
import { fetchImagesReducer } from './fetchImagesReducer';
import { localDataReducer } from './localDataReducer';
import { filterNotesReducer } from './filterNotesReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  newNote: newNoteReducer,
  fetchImages: fetchImagesReducer,
  localData: localDataReducer,
  filterNotes: filterNotesReducer,
  modalData: modalReducer,
});
