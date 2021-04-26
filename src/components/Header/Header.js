import { Link } from 'react-router-dom';
import logo from '../../assets/trees.png';

import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo-wrapper'>
        <Link className='logo-link' to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
        <h1>Diary</h1>
      </div>

      <div className='header-btn-wrapper'>
        <Link to='/' className='btn-common-styles change-display-btn'>
          Main
        </Link>

        <Link className='btn-common-styles add-note-btn' to='/new-note'>
          Add Note
        </Link>
      </div>
    </header>
  );
};
