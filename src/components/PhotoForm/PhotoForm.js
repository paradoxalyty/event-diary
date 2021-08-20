import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { FetchedImages } from '../FetchedImages/FetchedImages';

import { fetchImages, loadFromLocalStorage } from '../../redux/actions';
import { CHANGE_SEARCH_VALUE } from '../../redux/constants';

const PhotoForm = ({
  isFetched,
  fetchedImages,
  loading,
  error,
  errorMessage,
  searchQuery,
  searchValue,
  currentPage,
  fetchImages,
  loadFromLocalStorage,
  handleChange,
  handleImgClick,
  localNotes,
}) => {
  useEffect(() => {
    if (localNotes.length === 0) {
      loadFromLocalStorage();
    }

    if (searchValue.length === 0 && fetchedImages.length === 0) {
      fetchImages(searchQuery, currentPage);
    }
  }, [
    localNotes.length,
    searchValue.length,
    loadFromLocalStorage,
    fetchImages,
    fetchedImages.length,
    searchQuery,
    currentPage,
  ]);

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (searchValue.length) {
      fetchImages(searchValue, 1);
    }
  };

  return (
    <form className='search-form'>
      <input
        className='new-note-search input-common-styles'
        type='text'
        name={CHANGE_SEARCH_VALUE}
        value={searchValue}
        placeholder='Search'
        onChange={handleChange}
        autoComplete='off'
      />

      <button className='search-btn' onClick={handleSearchClick}></button>

      <div className='new-note-photos'>
        {loading ? <Loader /> : <div className='loader'></div>}

        {searchValue.length && !fetchedImages.length ? (
          <div className='not-found'>Nothing is found.</div>
        ) : (
          <></>
        )}

        {error && <div className='error-message'>{errorMessage}</div>}

        {isFetched && (
          <FetchedImages fetchedImages={fetchedImages} handleImgClick={handleImgClick} />
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    imgUrl: state.newNote.imgUrl,
    imgAuthor: state.newNote.imgAuthor,
    imgId: state.newNote.imgId,

    isFetched: state.fetchImages.isFetched,
    fetchedImages: state.fetchImages.fetchedImages,
    loading: state.fetchImages.loading,
    error: state.fetchImages.error,
    errorMessage: state.fetchImages.errorMessage,
    searchQuery: state.fetchImages.searchQuery,
    searchValue: state.fetchImages.searchValue,
    currentPage: state.fetchImages.currentPage,

    localNotes: state.localData.localNotes,
  };
};

const mapDispatchToProps = { fetchImages, loadFromLocalStorage };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
