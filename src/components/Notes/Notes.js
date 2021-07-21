import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';

import { loadFromLocalStorage, openModal, addModalData } from '../../redux/actions';

const Notes = ({
  localNotes,
  filterName,
  filterMood,
  loadFromLocalStorage,
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

  let notes = [];

  if ((filterName || filterMood) && filteredNotes.length) {
    notes = filteredNotes;
  }

  if (filterName.length === 0 && filterMood.length === 0) {
    notes = localNotes;
  }

  const handleClick = (event) => {
    const currentMood = event.currentTarget.childNodes[1].innerText;
    const currentName = event.currentTarget.lastChild.childNodes[0].innerText;
    const currentDate = event.currentTarget.lastChild.childNodes[1].innerText;
    const currentImgUrl = event.currentTarget.childNodes[0].src;
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
          <div
            key={index}
            className='note'
            onClick={handleClick}
            dataimgsrc={note.imgUrl}
            dataimgalt={note.imgAuthor}
            datamood={note.mood}
            datainfotitel={note.name}
            datainfodate={note.date}
            datainfodescription={note.description}
          >
            <img
              data-id={note.noteId}
              src={note.imgUrl}
              className='note-img'
              width='100%'
              height='100%'
              alt={note.imgAuthor}
            />

            {note.mood ? <div className='note-mood'>{note.mood}</div> : ''}

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
    localNotes: state.localData.notes,
    filterName: state.filterNotes.filterName,
    filterMood: state.filterNotes.filterMood,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFromLocalStorage: () => {
      dispatch(loadFromLocalStorage());
    },
    openModal: () => {
      dispatch(openModal());
    },
    addModalData: (payload) => {
      dispatch(addModalData(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
