import {createPortal} from 'react-dom'
import './Modal.css'

function Modal({children, handleCloseModal}) {

    const handleCloseOnOutsideClick = (e) => {
        
        console.log(e.target)
    }

    return createPortal (
        <div id='modal' onClick={handleCloseOnOutsideClick} className='modal-container'>
            <div className='modal-content'>
                <button onClick={handleCloseModal} className='close-icon'>X</button>
                 {children}
            </div>
        </div>, document.body
    )
}

export default Modal;