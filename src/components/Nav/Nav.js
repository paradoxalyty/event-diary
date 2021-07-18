import { connect } from 'react-redux';
import NavSelect from '../NavSelect/NavSelect';

import { addFilterName } from '../../redux/actions';

const Nav = ({ addFilterName, filterName }) => {
  const handleChangeFilter = (event) => {
    addFilterName(event.target.value);
  };

  return (
    <div className='nav'>
      <input
        className='search input-common-styles'
        name='searchByName'
        value={filterName}
        placeholder='Search'
        onChange={handleChangeFilter}
        autoComplete='off'
      ></input>
      <NavSelect />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filterName: state.filterNotes.filterName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilterName: (value) => {
      dispatch(addFilterName(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
