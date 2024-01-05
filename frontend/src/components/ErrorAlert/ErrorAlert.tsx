import React, {useState} from 'react';
import {Toast} from "react-bootstrap";

interface ErrorAlertProps {
    error: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
    const [isShow, setIsShow] = useState<boolean>(true);

    return (
        <Toast show={isShow} onClose={() => setIsShow(false)} className={"position-absolute top-0 end-0"} style={{ background: "rgba(255,202,202,0.9)" }}>
            <Toast.Header style={{ background: "rgba(255,179,179,0.9)" }}>
                <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{error ? error : "Something went wrong..."}</Toast.Body>
        </Toast>
    );
};

export default ErrorAlert;
