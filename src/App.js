import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage';





function App() {

 
  return (

    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        
      
    </BrowserRouter >
  );
}

export default App;
