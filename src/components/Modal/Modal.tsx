import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.scss";
import ModalProps from "./type";

const modalRoot = document.querySelector("#modal") as HTMLElement;
const bodyRoot = document.querySelector("body") as HTMLElement;
//

const Modal = ({ children, closeModal, className, closeButton, isOpen }: ModalProps) => {
    //
    useEffect(() => {
        if (isOpen) {
            modalRoot.classList.add('active');
            modalRoot.children[0].classList.add('fadeInFlyInModal');
            bodyRoot.style.overflow = "hidden";
        }
        return () => {
            modalRoot.children[0].classList.remove('fadeInFlyInModal');
            modalRoot.classList.remove('active');
            bodyRoot.style.overflow = "unset";
        }
    }, [isOpen])
    if (!isOpen) return null;
    return isOpen ? createPortal(<>
        {!closeButton ? children : <div className={`${className}`}>
            {children}
            <div onClick={closeModal} className="modal__close">&times;</div>
        </div>}
    </>, modalRoot.children[0]) : <></>
}


export default Modal;