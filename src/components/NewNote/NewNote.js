import React from 'react';
import { Link } from 'react-router-dom';
import { FormContextProvider } from '../../contexts/FormContext';
import { AddNoteForm } from '../NoteForms/AddNoteForm';
import { AddPhotoForm } from '../NoteForms/AddPhotoForm';

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
        <Link to='/notes' className='btn change-display-btn'>
          Notes
        </Link>
      </header>

      <div className='forms-wrapper'>
        <FormContextProvider>
          <AddNoteForm />
          <AddPhotoForm />
        </FormContextProvider>
      </div>
    </>
  );
};
