import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { Container } from "react-bootstrap";

function App() {
  return (
      <BrowserRouter>
          <Container className={"p-5 h-100"}>
              <AppRouter />
          </Container>
      </BrowserRouter>
  );
}

export default App;

