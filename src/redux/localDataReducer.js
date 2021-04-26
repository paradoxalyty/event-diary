import { LOAD_LOCAL_DATA, SAVE_LOCAL_DATA } from './types';

const initialState = {
  notes: [],
  // loadLocalData: false,
};

export const localDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOCAL_DATA:
      return { ...state, notes: action.payload.notes };
    // loadLocalData: true

    case SAVE_LOCAL_DATA:
      const serialisedState = JSON.stringify({
        notes: [...state.notes, action.payload],
      });
      localStorage.setItem('localNotes', serialisedState);
      return { notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};
