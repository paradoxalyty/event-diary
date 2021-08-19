import { DataFormSelect } from '../DataFormSelect/DataFormSelect';
import { NEW_NAME, NEW_DATE, NEW_DESCRIPTION, CLEAR_FORM } from '../../redux/constants';

export const DataForm = ({
  name,
  date,
  description,
  imgUrl,
  imgAuthor,
  isPhotoAdded,
  isNameValid,
  isPhotoValid,
  handleChange,
  handleFormSubmit,
}) => {
  return (
    <form className='new-note-form' onSubmit={handleFormSubmit}>
      <input
        className={
          isNameValid
            ? 'new-note-name input-common-styles'
            : 'new-note-name input-common-styles required'
        }
        type='text'
        name={NEW_NAME}
        value={name}
        placeholder='Name is required'
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

        <button className='btn-common-styles save-note-btn' type='submit'>
          save
        </button>
      </div>

      <div className='selected-photo-wrapper'>
        {isPhotoAdded ? (
          <div className='selected-photo'>
            <img className='new-note-photo' src={imgUrl} alt={imgAuthor} />
          </div>
        ) : (
          <p className={isPhotoValid ? 'warn-text' : 'warn-text required'}>
            Photo&nbsp;is&nbsp;required
          </p>
        )}
      </div>
    </form>
  );
};
