import {createPortal} from 'react-dom'
import './Modal.css'

function Modal({children, handleCloseModal}) {
    return createPortal (
        <div id='modal' className='modal-container'>
            <div className='modal-content'>
                <button onClick={handleCloseModal} className='close-icon'>X</button>
                {/* {children} */}
            </div>
        </div>, document.body
    )
}

export default Modal;