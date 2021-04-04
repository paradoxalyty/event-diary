import React from 'react';

export const Select = (prop) => {
  const moods = [
    '😵️',
    '🙃',
    '😑',
    '🤔',
    '🤤',
    '😇',
    '🤤',
    '😰',
    '😌',
    '😆',
    '😀',
  ];

  const handleChange = prop.handleChange;
  // const newMood = prop.value;

  // const handleClick = () => {
  //   console.log(newMood);
  // };

  return (
    <select
      className='new-note-select'
      name='mood'
      onChange={handleChange}
      // onClick={handleClick}
    >
      <option>&#9786;</option>
      {moods.map((mood, index) => (
        <option key={index} name='mood' value={mood} className='mood'>
          {mood}
        </option>
      ))}
    </select>
  );
};
