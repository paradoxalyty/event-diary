import React from 'react';
import { connect } from 'react-redux';

import { loadFromLocalStorage } from '../../redux/actions';

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
  SAVE_LOCAL_DATA,
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
        props.addNewName(targetValue);
        props.validateName();
        break;
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

  const createRandomId = () => {
    const randomString = Math.random().toString();
    const arr = randomString.split('.');
    return parseInt(arr[1]);
  };

  const handleOnImgClick = (event) => {
    event.preventDefault();

    props.addNewImgData({
      imgUrl: event.target.src,
      imgAuthor: event.target.alt,
      imgSrcLarge: event.target.dataset.srclarge,
      isPhotoAdded: true,
    });

    props.validatePhoto();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.validateName();
    props.validatePhoto();

    if (props.name.length && props.isPhotoAdded) {
      const newNote = {
        id: createRandomId(),
        name: props.name,
        mood: props.mood,
        date: props.date,
        description: props.description,
        imgData: {
          imgUrl: props.imgUrl,
          imgAuthor: props.imgAuthor,
          imgSrcLarge: props.imgSrcLarge,
          isPhotoAdded: false,
        },
      };
      props.saveToLocalStorage(newNote);
      props.clearFormData();
    }
  };

  return (
    <>
      <Header />

      <div className='forms-wrapper'>
        <DataForm
          handleFormSubmit={handleFormSubmit}
          handleChange={handleChange}
          name={props.name}
          date={props.date}
          description={props.description}
          imgUrl={props.imgUrl}
          imgAuthor={props.imgAuthor}
          isPhotoAdded={props.isPhotoAdded}
          isNameValid={props.isNameValid}
          isPhotoValid={props.isPhotoValid}
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
    imgUrl: state.newData.imgData.imgUrl,
    imgAuthor: state.newData.imgData.imgAuthor,
    imgId: state.newData.imgData.imgId,
    imgSrcLarge: state.newData.imgData.imgSrcLarge,
    isPhotoAdded: state.newData.imgData.isPhotoAdded,
    localNotes: state.localData.notes,
    isNameValid: state.newData.isNameValid,
    isPhotoValid: state.newData.isPhotoValid,
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
    addNewImgData: (payload) => {
      dispatch({ type: NEW_IMG_DATA, payload });
    },
    validateName: () => {
      dispatch({ type: VALIDATE_NAME });
    },
    validatePhoto: () => {
      dispatch({ type: VALIDATE_PHOTO });
    },
    clearFormData: () => {
      dispatch({ type: CLEAR_FORM });
    },
    addSearchValue: (payload) => {
      dispatch({ type: NEW_SEARCH_VALUE, payload });
    },

    loadFromLocalStorage: () => {
      dispatch(loadFromLocalStorage());
    },

    saveToLocalStorage: (payload) => {
      dispatch({ type: SAVE_LOCAL_DATA, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
