import React from 'react';
import { Link } from 'react-router-dom';
import { NewNoteForm } from '../NewNoteForm/NewNoteForm';

import './NewNote.css';
import logo from '../../assets/trees.png';

export const NewNote = () => {
  return (
    <>
      <header className='header'>
        <Link className='logo-block' to='/home'>
          <div className='logo-link'>
            <img src={logo} className='logo' alt='logo' />
          </div>
          <h1>Diary</h1>
        </Link>
        <div className='buttons-block'>
          <Link to='/notes' className='common-btn change-display-btn'>
            Notes
          </Link>
        </div>
      </header>
      <NewNoteForm />
    </>
  );
};
