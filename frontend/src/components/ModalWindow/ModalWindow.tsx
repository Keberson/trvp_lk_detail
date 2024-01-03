import React, {ReactNode} from 'react';
import {Modal} from "react-bootstrap";

interface ModalWindowProps {
    title: string;
    children: ReactNode;
    show: boolean;
    hide: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ title, children, show, hide}) => {
    return (
        <Modal
            show={show}
            centered
            dialogClassName={"h-50"}
            contentClassName={"h-100"}
        >
            <Modal.Header closeButton onHide={hide}>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default ModalWindow;
