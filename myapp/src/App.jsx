import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Viewproduct from './components/Viewproduct';
import Addproduct from './components/Addproduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/home" element={<Viewproduct />} />
      </Routes>
    </>
  );
}

export default App;