import './ModalContent.css'


function ModalContent({currentQuote}) {

    return <div className="quote-container">
        <div className='quote'>{currentQuote.quote}</div>
        <div className='quote-info'>
        <div>{currentQuote.bookTitle}</div>
        <div>{currentQuote.author}</div>
        </div>
    </div>
}

export default ModalContent;