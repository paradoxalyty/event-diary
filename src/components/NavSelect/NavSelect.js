import React from 'react';
import { connect } from 'react-redux';
import { MOODS, NEW_MOOD } from '../../redux/constants';

import { addFilterMood } from '../../redux/actions';

const NavSelect = ({ addFilterMood }) => {
  const handleChangeFilter = (event) => {
    addFilterMood(event.target.value);
  };

  return (
    <select className='select' name={NEW_MOOD} onChange={handleChangeFilter}>
      <option value=''>🌚</option>
      {MOODS.map((mood, index) => (
        <option key={index} name={NEW_MOOD} value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilterMood: (value) => {
      dispatch(addFilterMood(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(NavSelect);
