import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { Container } from "react-bootstrap";

function App() {
    return (
        <BrowserRouter>
            <Container className={"pt-5 pb-5 p-2 h-100"}>
                <AppRouter />
            </Container>
        </BrowserRouter>
    );
}

export default App;

