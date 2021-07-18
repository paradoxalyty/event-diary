import React from 'react';
import { MOODS, NEW_MOOD } from '../../redux/constants';

const DataFormSelect = ({ handleChange }) => {
  return (
    <select className='select data-form-select' name={NEW_MOOD} onChange={handleChange}>
      <option value=''>🌚</option>
      {MOODS.map((mood, index) => (
        <option key={index} name={NEW_MOOD} value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};

export default DataFormSelect;
