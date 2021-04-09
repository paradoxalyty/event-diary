import React, { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';
import { GetImages } from '../../containers/GetImages';

export const AddPhotoForm = () => {
  const images = GetImages();
  const { searchValue, handleSearchSubmit, handleChange, handleClick } = useContext(
    FormContext
  );

  return (
    <form className='search-form' onSubmit={handleSearchSubmit}>
      <input
        className='new-note-search common-styles placeholder'
        type='text'
        name='photo-search'
        value={searchValue}
        placeholder='Search'
        onChange={handleChange}
      />

      <button className='search-btn'></button>

      <div className='new-note-photos'>
        {images.data.map((image) => (
          <div className='new-note-photo-wrapper' key={image.id}>
            <img
              data-id={image.id}
              src={image.src.medium}
              className='new-note-photo'
              width='100%'
              height='100%'
              alt={`Provided by Pexels, photographer - ${image.photographer}`}
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </form>
  );
};
