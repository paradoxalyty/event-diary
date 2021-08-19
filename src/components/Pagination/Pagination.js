import { connect } from 'react-redux';

import { fetchImages } from '../../redux/actions';

const Pagination = ({
  fetchImages,
  searchValue,
  searchQuery,
  currentPage,
  prevPage,
  nextPage,
  totalPages,
}) => {
  const handleClick = (event) => {
    const num = parseInt(event.target.dataset.num);
    let followingPage = currentPage + num;
    if (currentPage === 1 && num === -1) {
      followingPage = prevPage;
    }
    if (currentPage === totalPages && num === 1) {
      followingPage = 1;
    }
    // followingPage
    fetchImages(searchValue || searchQuery, followingPage);
  };
  return (
    <nav className='pagination'>
      <button
        className='btn-common-styles pagination-btn prev-page-btn'
        type='button'
        onClick={handleClick}
        data-num='-1'
      >
        Prev Page ({prevPage})
      </button>
      <button
        className='btn-common-styles pagination-btn next-page-btn'
        type='button'
        onClick={handleClick}
        data-num='+1'
      >
        Next Page ({nextPage})
      </button>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    searchQuery: state.fetchImages.searchQuery,
    searchValue: state.fetchImages.searchValue,
    currentPage: state.fetchImages.currentPage,
    prevPage: state.fetchImages.prevPage,
    nextPage: state.fetchImages.nextPage,
    totalPages: state.fetchImages.totalPages,
  };
};

const mapDispatchToProps = {
  fetchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
