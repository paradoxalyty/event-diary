import React from 'react';

const FetchedImages = (props) => {
  const { images, handleOnImgClick } = props;

  return (
    <>
      {images &&
        images.map((image) => (
          <div className='new-note-photo-wrapper' key={image.id}>
            <img
              data-id={image.id}
              src={image.src.medium}
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

export default FetchedImages;
