import React from 'react';
import DataFormSelect from '../DataFormSelect/DataFormSelect';
import { NEW_NAME, NEW_DATE, NEW_DESCRIPTION, CLEAR_FORM } from '../../redux/constants';

const DataForm = ({
  name,
  date,
  description,
  imgUrl,
  imgAuthor,
  handleChange,
  handleFormSubmit,
}) => {
  return (
    <form className='new-note-form' onSubmit={handleFormSubmit}>
      <input
        className='new-note-name input-common-styles'
        type='text'
        name={NEW_NAME}
        value={name}
        placeholder='Name'
        onChange={handleChange}
        autoComplete='off'
      />

      <DataFormSelect handleChange={handleChange} />

      <input
        className='new-note-date input-common-styles'
        type='date'
        name={NEW_DATE}
        value={date}
        onChange={handleChange}
      />

      <textarea
        className='new-note-description input-common-styles'
        type='text'
        name={NEW_DESCRIPTION}
        value={description}
        placeholder='Description'
        onChange={handleChange}
      />

      <div className='form-btn-wrapper'>
        <button
          className='btn-common-styles clear-form-btn'
          type='button'
          name={CLEAR_FORM}
          onClick={handleChange}
        >
          clear form
        </button>

        <button className='btn-common-styles save-note-btn' onClick={handleFormSubmit}>
          save
        </button>
      </div>

      {imgUrl && (
        <div className='selected-photo-wrapper'>
          <div className='selected-photo'>
            <img className='new-note-photo' src={imgUrl} alt={imgAuthor} />
          </div>
        </div>
      )}
    </form>
  );
};

export default DataForm;
