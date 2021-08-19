import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { FetchedImages } from '../FetchedImages/FetchedImages';

import { fetchImages, loadFromLocalStorage } from '../../redux/actions';
import { CHANGE_SEARCH_VALUE } from '../../redux/constants';

const PhotoForm = ({
  loading,
  fetchedImages,
  fetchImages,
  loadFromLocalStorage,
  handleChange,
  handleImgClick,
  searchQuery,
  searchValue,
  currentPage,
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

        <FetchedImages fetchedImages={fetchedImages} handleImgClick={handleImgClick} />
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
    fetchedImages: state.fetchImages.fetchedImages,
    searchQuery: state.fetchImages.searchQuery,
    searchValue: state.fetchImages.searchValue,
    currentPage: state.fetchImages.currentPage,

    localNotes: state.localData.localNotes,
  };
};

const mapDispatchToProps = { fetchImages, loadFromLocalStorage };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
