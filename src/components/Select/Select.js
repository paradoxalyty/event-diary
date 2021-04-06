import React from 'react';

export const Select = (prop) => {
  const moods = ['😵️', '🙃', '😑', '🤔', '🤤', '😇', '🤤', '😰', '😌', '😆', '😀'];

  const handleChange = prop.handleChange;

  return (
    <select className='new-note-select' name='mood' onChange={handleChange}>
      <option>&#9786;</option>
      {moods.map((mood, index) => (
        <option key={index} name='mood' value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};
