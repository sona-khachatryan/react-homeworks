
import { useRef } from "react";

function useOutsideClick({ handleCloseModal }) {

    const modalRef = useRef();

    const onOutsideClick = (e) => {
        if(modalRef.current && !modalRef.current.contains(e.target)) {
            handleCloseModal();
        }
    };

    return [modalRef, onOutsideClick];
}

export default useOutsideClick;


