import {createPortal} from 'react-dom';
import './Modal.css'
import useOutsideClick from './useOutsideClick';

function Modal({children, handleCloseModal}) {

    const [modalRef, onOutsideClick] = useOutsideClick({ handleCloseModal })

    return createPortal (
        <div id='modal' className='modal-container' onClick={onOutsideClick}>
            <div className='modal-content' ref={modalRef}>
                <button onClick={handleCloseModal} className='close-icon'>X</button>
                 {children}
            </div>
        </div>, document.body
    )
}

export default Modal;