import React from 'react';
import './App.css';
import Index from './components/Index';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

            
      
      <Router>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
