import React from 'react';
import { connect } from 'react-redux';
import { MOODS, NEW_MOOD } from '../../redux/constants';
import { addFilterMood } from '../../redux/actions';

const FiltersSelect = ({ addFilterMood }) => {
  const handleChangeFilter = (event) => {
    addFilterMood(event.target.value);
  };

  return (
    <select
      className='filters-select select-common-styles'
      name={NEW_MOOD}
      onChange={handleChangeFilter}
    >
      <option value=''>🌚</option>
      {MOODS.map((mood, index) => (
        <option key={index} name={NEW_MOOD} value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};

const mapDispatchToProps = { addFilterMood };

export default connect(null, mapDispatchToProps)(FiltersSelect);
