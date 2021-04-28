import React from 'react';
import { connect } from 'react-redux';
import { NEW_MOOD } from '../../redux/types';

const Select = (props) => {
  const moods = ['🌚', '😵️', '🙃', '😑', '🤔', '🤤', '😇', '🤤', '😰', '😌', '😆', '😀'];

  const handleChange = props.handleChange;

  return (
    <select
      className='select'
      name={NEW_MOOD}
      defaultValue={props.mood}
      onChange={handleChange}
    >
      {moods.map((mood, index) => (
        <option key={index} name={NEW_MOOD} value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => {
  return { mood: state.newData.mood };
};

export default connect(mapStateToProps)(Select);
