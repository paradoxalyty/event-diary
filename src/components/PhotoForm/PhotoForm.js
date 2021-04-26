import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../Loader/Loader';

import { fetchImages, loadFromLocalStorage } from '../../redux/actions';
import { NEW_SEARCH_VALUE } from '../../redux/types';

import FetchedImages from '../FetchedImages/FetchedImages';

const PhotoForm = (props) => {
  const {
    loading,
    images,
    fetchImages,
    loadFromLocalStorage,
    imgUrl,
    imgAuthor,
    imgId,
    handleChange,
    handleOnImgClick,
    searchQuery,
    searchValue,
    notes,
  } = props;

  useEffect(() => {
    if (notes.length === 0) {
      loadFromLocalStorage();
    }

    if (images.length === 0) {
      fetchImages(searchQuery);
    }
  }, [notes.length, images.length, loadFromLocalStorage, fetchImages, searchQuery]);

  const onSearchClick = (event) => {
    event.preventDefault();
    fetchImages(searchValue || searchQuery);
  };

  return (
    <form className='search-form'>
      <input
        className='new-note-search input-common-styles'
        type='text'
        name={NEW_SEARCH_VALUE}
        value={searchValue}
        placeholder='Search'
        onChange={handleChange}
        autoComplete='off'
      />

      <button className='search-btn' onClick={onSearchClick}></button>

      <div className='new-note-photos'>
        {loading ? <Loader /> : <div className='loader'></div>}

        <FetchedImages
          images={images}
          imgUrl={imgUrl}
          imgAuthor={imgAuthor}
          imgId={imgId}
          handleOnImgClick={handleOnImgClick}
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    imgUrl: state.newData.imgUrl,
    imgAuthor: state.newData.imgAuthor,
    imgId: state.newData.imgId,

    loading: state.fetchImages.loading,
    images: state.fetchImages.fetchedImages,
    searchQuery: state.fetchImages.searchQuery,
    searchValue: state.fetchImages.searchValue,

    notes: state.localData.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: (searchQuery) => {
      dispatch(fetchImages(searchQuery));
    },

    loadFromLocalStorage: () => {
      dispatch(loadFromLocalStorage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
