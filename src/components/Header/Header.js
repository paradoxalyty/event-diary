import { Link } from 'react-router-dom';
import logo from '../../assets/trees.png';

import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <Link className='logo-link' to='/'>
        <div className='logo-img-wrapper '>
          <img src={logo} className='logo' alt='logo' />
        </div>
        <h1>Diary</h1>
      </Link>

      <div className='header-btn-wrapper'>
        <Link to='/' className='btn-common-styles notes-btn'>
          Notes
        </Link>

        <Link className='btn-common-styles add-note-btn' to='/new-note'>
          Add Note
        </Link>
      </div>
    </header>
  );
};
