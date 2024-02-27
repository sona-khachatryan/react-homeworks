import { useEffect, useRef } from "react"

export const useClickOutside = ({closeModal, modalIsOpen}) => {

    const modalRef = useRef();

    
    useEffect(() => {
    
        const handleOusideClick = (e) => {
           
            if(modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            };
        };

        if(modalIsOpen) {
            document.addEventListener('click', handleOusideClick);
        };

        return () => {
            document.removeEventListener('click', handleOusideClick);
        }

    }, [modalRef.current])

    return [ modalRef ];
}





