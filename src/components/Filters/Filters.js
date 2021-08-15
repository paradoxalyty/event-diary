import { connect } from 'react-redux';
import FiltersSelect from '../FiltersSelect/FiltersSelect';

import { addFilterName, clearFilters } from '../../redux/actions';

const Filters = ({ addFilterName, filterName, clearFilters }) => {
  const handleChangeFilter = (event) => {
    addFilterName(event.target.value);
  };

  return (
    <div className='filters'>
      <input
        className='input-common-styles filters-search'
        name='searchByName'
        value={filterName}
        placeholder='Search'
        onChange={handleChangeFilter}
        autoComplete='off'
      ></input>
      <FiltersSelect />
      <button className='btn-common-styles clear-filters-btn' onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filterName: state.filterNotes.filterName };
};

const mapDispatchToProps = { addFilterName, clearFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
