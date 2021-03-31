import React from 'react';

import logo from '../assets/trees.png';
import iconSmile from '../assets/smile-mouth-open.png';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo-block'>
        <a className='logo-link' href='#'>
          <img src={logo} className='logo' alt='logo' />
        </a>
        <h1>Diary</h1>
      </div>
      <div className='nav'>
        <input className='search' placeholder='Поиск'></input>
        <a className='smile-btn'>
          <img src={iconSmile} alt='icon-smile' />
        </a>
      </div>
      <div className='buttons-block'>
        <button className='common-btn change-display-btn'>Notes</button>
        <button className='common-btn add-note-btn'>Add Note</button>
      </div>
    </header>
  );
};
