import Select from '../Select/Select';

export const Nav = () => {
  return (
    <div className='nav'>
      <input
        className='search input-common-styles'
        placeholder='Search'
        autoComplete='off'
      ></input>
      <Select />
    </div>
  );
};
