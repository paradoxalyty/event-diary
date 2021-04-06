import React, { useContext } from 'react';
import { Select } from '../Select/Select';
import { FormContext } from '../../contexts/FormContext';

export const AddNoteForm = () => {
  const {
    name,
    date,
    description,
    imgUrl,
    imgAuthor,
    handleChange,
    handleSubmit,
    handleClearForm,
  } = useContext(FormContext);

  return (
    <form className='new-note-form' onSubmit={handleSubmit}>
      <input
        className='new-note-name common-styles placeholder'
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={handleChange}
      />

      <Select handleChange={handleChange} />

      <input
        className='new-note-date common-styles'
        type='date'
        name='date'
        value={date}
        onChange={handleChange}
      />

      <textarea
        className='new-note-description placeholder'
        type='text'
        name='description'
        value={description}
        placeholder='Description'
        onChange={handleChange}
      />

      <div className='form-btn-wrapper'>
        <button
          className='btn clear-form-btn'
          type='button'
          onClick={handleClearForm}
        >
          clear form
        </button>

        <button className='btn save-note-btn' onClick={handleSubmit}>
          save
        </button>
      </div>
      {imgUrl ? (
        <div className='selected-photo-wrapper'>
          <div className='selected-photo'>
            <img className='new-note-photo' src={imgUrl} alt={imgAuthor} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
};
