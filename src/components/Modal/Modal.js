import { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

export const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => openModal(),
            closeModal: () => closeModal(),
        }
    });

    const openModal = () => {
        setDisplay(true)
    };

    const closeModal = () => {
        setDisplay(false)
    };

    if (display) {
        return ReactDOM.createPortal(
            /*
            createPortal опрокидывает div с классом modal-wrapper в div с классом modal-root,
            который находится в файле index.html 
            */

            <div className="modal-wrapper">
                <div onClick={closeModal} className="modal-backdrop" />
                <div className="modal-box">
                    <button onClick={() => ref.current.closeModal()} className="modal-close"></button>
                    {props.children}
                </div>
            </div >, document.getElementById("modal-root"))
    }

    return null;
});