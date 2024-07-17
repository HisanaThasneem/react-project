import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Viewproduct from './component/Viewproduct';
import Addproduct from './component/Addproduct';

const App=() =>{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/home' element={<Viewproduct />} />
      </Routes>
    </Router>
  );
};

export default App;