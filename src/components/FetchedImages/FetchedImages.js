import React from 'react';

export const FetchedImages = ({ images, handleOnImgClick }) => {
  return (
    <>
      {images &&
        images.map((image) => (
          <div className='new-note-photo-wrapper' key={image.id}>
            <img
              data-id={image.id}
              src={image.src.medium}
              data-srclarge={image.src.large}
              className='new-note-photo'
              width='100%'
              height='100%'
              alt={`Provided by Pexels, photographer - ${image.photographer}`}
              onClick={handleOnImgClick}
            />
          </div>
        ))}
    </>
  );
};
