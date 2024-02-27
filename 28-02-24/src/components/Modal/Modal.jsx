import { createPortal } from 'react-dom';
import { useClickOutside } from '../../hooks/useClickOutside';
import './Modal.css';

function Modal({children, closeModal, modalIsOpen}) {

    const [ ref ] = useClickOutside({closeModal, modalIsOpen});

    return createPortal(
        <div className='modal-container'>
            <div className='modal-content' ref={ref}>
                <button className='close-btn' onClick={closeModal}>x</button>
                {children}
            </div>
        </div>, document.getElementById('root2')
    )
}

export default Modal;