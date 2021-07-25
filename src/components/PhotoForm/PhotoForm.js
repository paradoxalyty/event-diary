import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../Loader/Loader';

import { fetchImages, loadFromLocalStorage } from '../../redux/actions';
import { NEW_SEARCH_VALUE } from '../../redux/constants';

import FetchedImages from '../FetchedImages/FetchedImages';

const PhotoForm = ({
  loading,
  images,
  fetchImages,
  loadFromLocalStorage,
  handleChange,
  handleOnImgClick,
  searchQuery,
  searchValue,
  notes,
}) => {
  useEffect(() => {
    if (notes.length === 0) {
      loadFromLocalStorage();
    }

    if (searchValue.length === 0) {
      fetchImages(searchQuery);
    }
  }, [notes.length, searchValue.length, loadFromLocalStorage, fetchImages, searchQuery]);

  const onSearchClick = (event) => {
    event.preventDefault();
    if (searchValue.length) {
      fetchImages(searchValue);
    }
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
        required
      />

      <button className='search-btn' onClick={onSearchClick}></button>

      <div className='new-note-photos'>
        {loading ? <Loader /> : <div className='loader'></div>}

        <FetchedImages images={images} handleOnImgClick={handleOnImgClick} />
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
