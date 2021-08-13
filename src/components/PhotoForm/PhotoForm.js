import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { FetchedImages } from '../FetchedImages/FetchedImages';

import { fetchImages, loadFromLocalStorage } from '../../redux/actions';
import { NEW_SEARCH_VALUE } from '../../redux/constants';

const PhotoForm = ({
  loading,
  images,
  fetchImages,
  loadFromLocalStorage,
  handleChange,
  handleOnImgClick,
  searchQuery,
  searchValue,
  localNotes,
}) => {
  useEffect(() => {
    if (localNotes.length === 0) {
      loadFromLocalStorage();
    }

    if (searchValue.length === 0) {
      fetchImages(searchQuery);
    }
  }, [
    localNotes.length,
    searchValue.length,
    loadFromLocalStorage,
    fetchImages,
    searchQuery,
  ]);

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
    imgUrl: state.newNote.imgUrl,
    imgAuthor: state.newNote.imgAuthor,
    imgId: state.newNote.imgId,

    loading: state.fetchImages.loading,
    images: state.fetchImages.fetchedImages,
    searchQuery: state.fetchImages.searchQuery,
    searchValue: state.fetchImages.searchValue,

    localNotes: state.localData.localNotes,
  };
};

const mapDispatchToProps = { fetchImages, loadFromLocalStorage };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
