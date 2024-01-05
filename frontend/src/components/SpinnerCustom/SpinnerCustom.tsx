import React from "react";
import {Container, Spinner} from "react-bootstrap";

const SpinnerCustom = () => {
    return (
        <>
            <Container className={"position-fixed top-0 start-0 end-0 mw-100 h-100 p-0 bg-dark bg-opacity-50"} style={{ zIndex: 1056 }} />
            <Spinner animation="grow" variant="success" className={"position-fixed top-50 start-50"} style={{ zIndex: 1056 }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
};

export default SpinnerCustom;
