import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import './BookQuoteApp.css';
import ModalContent from "../ModalContent/ModalContent";
import { quotes } from "../../constants/quotes";

function BookQuoteApp() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentQuote, setCurrentQuote] = useState({});

    const randomIndex = () => {
        return Math.floor(Math.random() * (quotes.length))
    }

    const openModal = (e) => {
        e.stopPropagation();
        setModalIsOpen(true);
        setCurrentQuote(quotes[randomIndex()]);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
   

    return <div>
        {!modalIsOpen && <div className='get-quote-container'>
            <button title='Click' className='get-quote-btn' onClick={openModal}>Get a random book quote.</button>
            </div>}
        {modalIsOpen && <Modal closeModal={closeModal} modalIsOpen={modalIsOpen}>
            <ModalContent currentQuote={currentQuote}/>
            </Modal>}
    </div>
}

export default BookQuoteApp;