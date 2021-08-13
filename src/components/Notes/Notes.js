import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';

import {
  loadFromLocalStorage,
  deleteFromLocalNotes,
  openModal,
  addModalData,
} from '../../redux/actions';

const Notes = ({
  localNotes,
  filterName,
  filterMood,
  loadFromLocalStorage,
  deleteFromLocalNotes,
  openModal,
  addModalData,
}) => {
  useEffect(() => {
    if (localNotes.length === 0) {
      loadFromLocalStorage();
    }
  }, [localNotes.length, loadFromLocalStorage]);

  const filteredNotes = localNotes
    .filter((note) => note.name.toLowerCase().includes(filterName.toLowerCase()))
    .filter((note) => note.mood.includes(filterMood));

  const deleteNote = (event) => {
    event.stopPropagation();
    const selectedNoteId = parseInt(event.target.offsetParent.id);
    const newLocalNotes = localNotes.filter((note) => {
      return note.id !== selectedNoteId;
    });
    deleteFromLocalNotes(newLocalNotes);
  };

  let notes = [];

  if (filterName.length === 0 && filterMood.length === 0) {
    notes = localNotes;
  } else {
    notes = filteredNotes;
  }

  const handleClick = (event) => {
    const currentMood = event.currentTarget.childNodes[1].innerText;
    const currentName = event.currentTarget.lastChild.childNodes[0].innerText;
    const currentDate = event.currentTarget.lastChild.childNodes[1].innerText;
    const currentImgUrl = event.currentTarget.childNodes[0].dataset.srclarge;
    const currentImgAuthor = event.currentTarget.childNodes[0].alt;
    const currentDescription = event.currentTarget.lastChild.childNodes[2].innerText;

    addModalData({
      modalMood: currentMood,
      modalName: currentName,
      modalDate: currentDate,
      modalImgUrl: currentImgUrl,
      modalImgAuthor: currentImgAuthor,
      modalDescription: currentDescription,
    });
    openModal();
  };

  return (
    <div className='notes'>
      {notes.length ? (
        notes.map((note, index) => (
          <div key={index} id={note.id} className='note' onClick={handleClick}>
            <img
              className='note-img'
              width='100%'
              height='100%'
              alt={note.imgData.imgAuthor}
              src={note.imgData.imgUrl}
              data-srclarge={note.imgData.imgSrcLarge}
            />

            {note.mood ? <span className='note-mood'>{note.mood}</span> : ''}
            <span className='note-delete' onClick={deleteNote}></span>

            <div className='info-box'>
              <span className='info-titel'>{note.name}</span>
              <span className='info-date'>{note.date}</span>
              <p className='info-description'>{note.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='empty'>Nothing is found.</div>
      )}

      <Modal></Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    localNotes: state.localData.localNotes,
    filterName: state.filterNotes.filterName,
    filterMood: state.filterNotes.filterMood,
  };
};

const mapDispatchToProps = {
  loadFromLocalStorage,
  deleteFromLocalNotes,
  openModal,
  addModalData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
