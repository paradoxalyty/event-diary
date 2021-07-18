import React from 'react';
import { connect } from 'react-redux';

import {
  clearFormData,
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../redux/actions';

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
} from '../../redux/constants';

import { Header } from '../../components/Header/Header';
import DataForm from '../../components/DataForm/DataForm';
import PhotoForm from '../../components/PhotoForm/PhotoForm';

import './NewNote.css';

const NewNote = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    const targetName = event.target.name;
    const targetValue = event.target.value;

    switch (targetName) {
      case NEW_NAME:
        return props.addNewName(targetValue);
      case NEW_MOOD:
        return props.addNewMood(targetValue);
      case NEW_DATE:
        return props.addNewDate(targetValue);
      case NEW_DESCRIPTION:
        return props.addNewDescription(targetValue);
      case CLEAR_FORM:
        return props.clearFormData();
      case NEW_SEARCH_VALUE:
        return props.addSearchValue(targetValue.trimStart());
      default:
      // ignore default
    }
  };

  const handleOnImgClick = (event) => {
    event.preventDefault();
    props.addNewImgUrl(event.target.src);
    props.addNewImgAuthor(event.target.alt);
    props.addNewImgId(event.target.dataset.id);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      name: props.name,
      mood: props.mood,
      date: props.date,
      description: props.description,
      imgUrl: props.imgUrl,
      imgAuthor: props.imgAuthor,
      itemId: props.imgId,
    };
    props.saveToLocalStorage(newNote);
    props.clearFormData();
  };

  return (
    <>
      <Header />

      <div className='forms-wrapper'>
        <DataForm
          handleFormSubmit={handleFormSubmit}
          handleChange={handleChange}
          name={props.name}
          mood={props.mood}
          date={props.date}
          description={props.description}
          imgUrl={props.imgUrl}
          imgAuthor={props.imgAuthor}
          imgId={props.imgId}
        />
        <PhotoForm handleChange={handleChange} handleOnImgClick={handleOnImgClick} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.newData.name,
    mood: state.newData.mood,
    date: state.newData.date,
    description: state.newData.description,
    imgUrl: state.newData.imgUrl,
    imgAuthor: state.newData.imgAuthor,
    imgId: state.newData.imgId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewName: (newValue) => {
      dispatch({ type: NEW_NAME, newValue });
    },
    addNewMood: (newValue) => {
      dispatch({ type: NEW_MOOD, newValue });
    },
    addNewDate: (newValue) => {
      dispatch({ type: NEW_DATE, newValue });
    },
    addNewDescription: (newValue) => {
      dispatch({ type: NEW_DESCRIPTION, newValue });
    },
    addNewImgUrl: (newValue) => {
      dispatch({ type: NEW_IMG_URL, newValue });
    },
    addNewImgAuthor: (newValue) => {
      dispatch({ type: NEW_IMG_AUTHOR, newValue });
    },
    addNewImgId: (newValue) => {
      dispatch({ type: NEW_IMG_ID, newValue });
    },
    clearFormData: () => {
      dispatch(clearFormData());
    },
    addSearchValue: (payload) => {
      dispatch({ type: NEW_SEARCH_VALUE, payload });
    },

    loadFromLocalStorage: () => {
      dispatch(loadFromLocalStorage());
    },

    saveToLocalStorage: (newNote) => {
      dispatch(saveToLocalStorage(newNote));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
