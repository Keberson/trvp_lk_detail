import React, {ReactNode} from 'react';
import {Modal} from "react-bootstrap";

export enum ModalSize {
    small = "h-25",
    medium = "h-50",
    large = "h-100",
}

interface ModalWindowProps {
    title: string;
    children: ReactNode;
    show: boolean;
    hide: () => void;
    size?: ModalSize;
}

const ModalWindow: React.FC<ModalWindowProps> = (
    {
        title,
        children,
        show,
        hide,
        size = ModalSize.large
    }) => {
    return (
        <Modal
            show={show}
            centered
            dialogClassName={"h-50"}
            contentClassName={size}
        >
            <Modal.Header closeButton onHide={hide} style={{ background: "#C0CFB2" }}>
                <Modal.Title className={"fw-bolder"}>
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
