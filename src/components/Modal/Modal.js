import { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';
import modalExample from '../../assets/modal-example.jpg';

export const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    };
  });

  const openModal = () => {
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      /*
            createPortal опрокидывает div с классом modal-wrapper в div с классом modal-root,
            который находится в файле index.html 
            */

      <div className='modal-wrapper'>
        <div onClick={closeModal} className='modal-backdrop' />
        <div className='modal-box'>
          <button
            onClick={() => ref.current.closeModal()}
            className='modal-close'
          ></button>
          {/* {props.children} */}

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
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});
