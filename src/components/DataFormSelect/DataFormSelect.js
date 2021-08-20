import { MOODS, NEW_MOOD } from '../../redux/constants';

export const DataFormSelect = ({ mood, handleChange }) => {
  return (
    <select
      className='data-form-select select-common-styles'
      name={NEW_MOOD}
      value={mood}
      onChange={handleChange}
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
