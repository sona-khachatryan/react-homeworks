import {createPortal} from 'react-dom'
import { useRef } from 'react';
import './Modal.css'

function Modal({children, handleCloseModal}) {

    const modalRef = useRef();
    
    const handleOutsideClick = (e) => {
        if(modalRef.current && !modalRef.current.contains(e.target)) {
            handleCloseModal();
        }
    };
        
    return createPortal (
        <div id='modal' className='modal-container' onClick={handleOutsideClick}>
            <div className='modal-content' ref={modalRef}>
                <button onClick={handleCloseModal} className='close-icon'>X</button>
                 {children}
            </div>
        </div>, document.body
    )
}

export default Modal;