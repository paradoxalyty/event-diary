import React from 'react';
import { Link } from 'react-router-dom';
import { useImages } from '../../Hooks/useImages';
import { Select } from '../Select/Select';
import { Modal } from '../Modal/Modal';

import './Notes.css';
import logo from '../../assets/trees.png';
import modalExample from '../../assets/modal-example.jpg';

export const Notes = () => {
  const images = useImages();

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

        <div className='buttons-block'>
          <Link className='common-btn add-note-btn' to='/add-note'>
            Add Note
          </Link>
        </div>
      </header>

      <div className='nav'>
        <input className='search' placeholder='Поиск'></input>
        <Select />
      </div>

      <div className='notes'>
        ()
        {images.data.map((image) => (
          <div key={image.id} className='note' onClick={openModal}>
            <img
              src={image.src.medium}
              className='note-img'
              width='100%'
              height='100%'
              alt={`Provided by Pexels, photographer - ${image.photographer}`}
            />
            <div className='info-box'>
              <span className='info-titel'>Visited the mountains</span>
              <span className='info-date'>Wed Jan 14</span>
              <p className='info-description'>
                Today I felt a childish excitement ...
              </p>
            </div>
          </div>
        ))}
        <Modal ref={modalRef}>
          <div className='modal-box-heading'>
            <span className='modal-titel'>Visited the mountains</span>
            <span className='modal-date'>Wed Jan 14</span>
          </div>
          <div className='modal-box-main'>
            <img
              src={modalExample}
              className='modal-img'
              alt={`Provided by Pexels, photographer - `}
            />
            <p className='modal-description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              nostrum rerum reprehenderit perferendis unde praesentium
              repudiandae velit dolorem, eveniet vel laborum hic labore illo?
              Fugit aspernatur amet voluptatum eum dicta eaque sint quaerat
              ullam, nihil voluptate modi laudantium voluptas soluta eveniet
              saepe quibusdam reiciendis temporibus cum pariatur? Vero magni
              dolore provident excepturi exercitationem rerum ipsum consequuntur
              est rem harum! Quod at voluptatum animi ratione fugiat enim
              inventore corrupti asperiores, ad non numquam, quisquam ab iure!
              In quos reprehenderit alias deleniti, consectetur enim sit, animi
              autem deserunt cupiditate facilis odit perferendis eos cum?
              Expedita tempora et, quidem, velit esse at doloremque,
              voluptatibus optio ipsa magnam eligendi omnis molestiae totam
              nihil perspiciatis excepturi porro nesciunt cumque modi nulla.
              Dolores incidunt cupiditate voluptatibus dignissimos amet,
              debitis, molestias id perspiciatis quod atque tenetur quibusdam,
              quae impedit quidem officiis reprehenderit. Hic nostrum architecto
              illum culpa quam ratione repellat. Eum eius vero voluptates,
              dolorem asperiores dolores? Ullam porro molestiae debitis animi
              accusamus ducimus ipsum, pariatur qui sequi temporibus maxime vel
              aliquam exercitationem, quia tenetur dolorem dolores aut nihil
              dolorum magnam cum quam. Delectus amet molestias cumque eaque rem
              sit aliquam consequuntur, quis at praesentium. Aspernatur, quasi?
              Animi ducimus asperiores atque temporibus nam odio eius veritatis
              pariatur?
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};
