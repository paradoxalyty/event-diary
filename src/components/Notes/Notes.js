import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal } from '../Modal/Modal';

import { loadFromLocalStorage } from '../../redux/actions';

const Notes = ({ localNotes, filteredNotes, loadFromLocalStorage }) => {
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  useEffect(() => {
    if (localNotes.length === 0) {
      loadFromLocalStorage();
    }
  }, [localNotes.length, loadFromLocalStorage]);

  const notes = filteredNotes.length ? filteredNotes : localNotes;

  return (
    <div className='notes'>
      {notes.length ? (
        notes.map((note, index) => (
          <div key={index} className='note' onClick={openModal}>
            <img
              data-id={note.noteId}
              src={note.imgUrl}
              className='note-img'
              width='100%'
              height='100%'
              alt={note.imgAuthor}
            />

            <div className='note-mood'>{note.mood}</div>

            <div className='info-box'>
              <span className='info-titel'>{note.name}</span>
              <span className='info-date'>{note.date}</span>
              <p className='info-description'>{note.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='empty'>Diary is empty.</div>
      )}

      <Modal ref={modalRef}></Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    localNotes: state.localData.notes,
    filteredNotes: state.localData.filteredNotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFromLocalStorage: () => {
      dispatch(loadFromLocalStorage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
