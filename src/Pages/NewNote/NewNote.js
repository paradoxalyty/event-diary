import React from 'react';
import { connect } from 'react-redux';

import {
  addNewName,
  addNewMood,
  addNewDate,
  addNewDescription,
  addNewImgData,
  validateName,
  validatePhoto,
  clearFormData,
  addSearchValue,
  saveToLocalStorage,
} from '../../redux/actions';

import {
  NEW_NAME,
  NEW_MOOD,
  NEW_DATE,
  NEW_DESCRIPTION,
  CLEAR_FORM,
  NEW_SEARCH_VALUE,
} from '../../redux/constants';

import { Header } from '../../components/Header/Header';
import { DataForm } from '../../components/DataForm/DataForm';
import PhotoForm from '../../components/PhotoForm/PhotoForm';

import './NewNote.css';

const NewNote = ({
  name,
  mood,
  date,
  description,
  imgUrl,
  imgAuthor,
  imgSrcLarge,
  isPhotoAdded,
  isNameValid,
  isPhotoValid,
  addNewName,
  addNewMood,
  addNewDate,
  addNewDescription,
  addNewImgData,
  validateName,
  validatePhoto,
  clearFormData,
  addSearchValue,
  saveToLocalStorage,
}) => {
  const handleChange = (event) => {
    event.preventDefault();
    const targetName = event.target.name;
    const targetValue = event.target.value;

    switch (targetName) {
      case NEW_NAME:
        addNewName(targetValue);
        validateName();
        break;
      case NEW_MOOD:
        return addNewMood(targetValue);
      case NEW_DATE:
        return addNewDate(targetValue);
      case NEW_DESCRIPTION:
        return addNewDescription(targetValue);
      case CLEAR_FORM:
        return clearFormData();
      case NEW_SEARCH_VALUE:
        return addSearchValue(targetValue.trimStart());
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

    addNewImgData({
      imgUrl: event.target.src,
      imgAuthor: event.target.alt,
      imgSrcLarge: event.target.dataset.srclarge,
      isPhotoAdded: true,
    });

    validatePhoto();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    validateName();
    validatePhoto();

    if (name.length && isPhotoAdded) {
      const newNote = {
        id: createRandomId(),
        name: name,
        mood: mood,
        date: date,
        description: description,
        imgData: {
          imgUrl: imgUrl,
          imgAuthor: imgAuthor,
          imgSrcLarge: imgSrcLarge,
          isPhotoAdded: false,
        },
      };
      saveToLocalStorage(newNote);
      clearFormData();
    }
  };

  return (
    <>
      <Header />

      <div className='forms-wrapper'>
        <DataForm
          handleFormSubmit={handleFormSubmit}
          handleChange={handleChange}
          name={name}
          date={date}
          description={description}
          imgUrl={imgUrl}
          imgAuthor={imgAuthor}
          isPhotoAdded={isPhotoAdded}
          isNameValid={isNameValid}
          isPhotoValid={isPhotoValid}
        />
        <PhotoForm handleChange={handleChange} handleOnImgClick={handleOnImgClick} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.newNote.name,
    mood: state.newNote.mood,
    date: state.newNote.date,
    description: state.newNote.description,
    imgUrl: state.newNote.imgData.imgUrl,
    imgAuthor: state.newNote.imgData.imgAuthor,
    imgSrcLarge: state.newNote.imgData.imgSrcLarge,
    isPhotoAdded: state.newNote.imgData.isPhotoAdded,
    isNameValid: state.newNote.isNameValid,
    isPhotoValid: state.newNote.isPhotoValid,
  };
};

const mapDispatchToProps = {
  addNewName,
  addNewMood,
  addNewDate,
  addNewDescription,
  addNewImgData,
  validateName,
  validatePhoto,
  clearFormData,
  addSearchValue,
  saveToLocalStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
