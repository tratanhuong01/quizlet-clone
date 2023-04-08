import { ReactNode } from "react";

type ModalProps = {
    closeModal: () => void,
    children?: ReactNode,
    className: string,
    isOpen: Boolean,
    closeButton?: Boolean
}

export default ModalProps;