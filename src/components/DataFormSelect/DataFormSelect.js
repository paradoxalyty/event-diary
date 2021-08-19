import { MOODS, NEW_MOOD } from '../../redux/constants';

export const DataFormSelect = ({ handleChange }) => {
  return (
    <select
      className='data-form-select select-common-styles'
      name={NEW_MOOD}
      onChange={handleChange}
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
