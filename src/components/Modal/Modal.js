import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { closeModal } from '../../redux/actions';

import './Modal.css';

const Modal = ({
  isOpen,
  modalMood,
  modalName,
  modalDate,
  modalImgUrl,
  modalImgAuthor,
  modalDescription,
  closeModal,
}) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      /*
        createPortal опрокидывает div с классом modal-wrapper в div с классом modal-root,
        который находится в файле index.html 
      */

      <div className='modal-wrapper'>
        <div onClick={closeModal} className='modal-backdrop' />
        <div className='modal-box'>
          <button onClick={() => closeModal()} className='modal-close'></button>

          <div className='modal-box-heading'>
            <span className='modal-mood'>{modalMood}</span>
            <span className='modal-titel'>{modalName}</span>
            <span className='modal-date'>{modalDate}</span>
          </div>
          <div className='modal-box-main'>
            <div className='modal-img-wrapper'>
              <img src={modalImgUrl} className='modal-img' alt={modalImgAuthor} />
            </div>
            <p className='modal-description'>{modalDescription}</p>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.modalData.isOpen,
    modalMood: state.modalData.defaultValue.modalMood,
    modalName: state.modalData.defaultValue.modalName,
    modalDate: state.modalData.defaultValue.modalDate,
    modalImgUrl: state.modalData.defaultValue.modalImgUrl,
    modalImgAuthor: state.modalData.defaultValue.modalImgAuthor,
    modalDescription: state.modalData.defaultValue.modalDescription,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
