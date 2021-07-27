import { LOAD_LOCAL_DATA, SAVE_LOCAL_DATA, DELETE_FROM_LOCAL_NOTES } from './constants';

const initialState = {
  localNotes: [],
};

export const localDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOCAL_DATA:
      return { ...state, localNotes: action.payload.localNotes };

    case SAVE_LOCAL_DATA:
      const serialisedState = JSON.stringify({
        localNotes: [...state.localNotes, action.payload],
      });
      localStorage.setItem('localNotes', serialisedState);
      return { ...state, localNotes: [...state.localNotes, action.payload] };

    case DELETE_FROM_LOCAL_NOTES:
      const someState = JSON.stringify({ localNotes: action.payload });
      action.payload.length
        ? localStorage.setItem('localNotes', someState)
        : localStorage.clear();
      return { ...state, localNotes: action.payload };

    default:
      return state;
  }
};
