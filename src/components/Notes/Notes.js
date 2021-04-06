import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from '../Select/Select';
import { Modal } from '../Modal/Modal';

import './Notes.css';
import logo from '../../assets/trees.png';

export const Notes = () => {
  const notes = localStorage.getItem('notes');
  const result = JSON.parse(notes) || [];

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      <header className='header'>
        <div className='logo-block'>
          <Link className='logo-link' to='/home'>
            <img src={logo} className='logo' alt='logo' />
          </Link>
          <h1>Diary</h1>
        </div>

        <Link className='btn add-note-btn' to='/new-note'>
          Add Note
        </Link>
      </header>

      <div className='nav'>
        <input className='search' placeholder='Поиск'></input>
        <Select />
      </div>

      <div className='notes'>
        {result.length ? (
          result.map((item, index) => (
            <div key={index} className='note' onClick={openModal}>
              <img
                data-id={item.itemId}
                src={item.imgUrl}
                className='note-img'
                width='100%'
                height='100%'
                alt={item.imgAuthor}
              />
              <div className='info-box'>
                <span className='info-titel'>{item.name}</span>
                <span className='info-date'>{item.date}</span>
                <p className='info-description'>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className='empty'>Diary is empty.</div>
        )}

        <Modal ref={modalRef}></Modal>
      </div>
    </>
  );
};
