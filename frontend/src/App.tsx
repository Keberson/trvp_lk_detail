import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { Container } from "react-bootstrap";

function App() {
  return (
      <Container className={"p-5 h-100"}>
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
      </Container>
  );
}

export default App;

