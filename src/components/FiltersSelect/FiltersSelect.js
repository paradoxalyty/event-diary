import { connect } from 'react-redux';
import { MOODS, NEW_MOOD } from '../../redux/constants';
import { addFilterMood } from '../../redux/actions';

const FiltersSelect = ({ mood, addFilterMood }) => {
  const handleChangeFilter = (event) => {
    addFilterMood(event.target.value);
  };

  return (
    <select
      className='filters-select select-common-styles'
      name={NEW_MOOD}
      value={mood}
      onChange={handleChangeFilter}
    >
      <option value=''>🌚</option>
      {MOODS.map((item, index) => (
        <option key={index} name={NEW_MOOD} value={item} className='mood'>
          {item}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => {
  return { mood: state.filterNotes.filterMood };
};

const mapDispatchToProps = { addFilterMood };

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSelect);
