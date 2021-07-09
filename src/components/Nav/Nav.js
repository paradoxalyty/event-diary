import { connect } from 'react-redux';
import Select from '../Select/Select';

import { filterNotes } from '../../redux/actions';

const Nav = ({ notes, filterNotes }) => {
  const handleChange = (event) => {
    const filteredNotes = notes.filter((note) => {
      return note.name.indexOf(event.target.value) !== -1;
    });
    filterNotes(filteredNotes);
  };

  return (
    <div className='nav'>
      <input
        className='search input-common-styles'
        placeholder='Search'
        onChange={handleChange}
        autoComplete='off'
      ></input>
      <Select />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { notes: state.localData.notes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterNotes: (value) => {
      dispatch(filterNotes(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
