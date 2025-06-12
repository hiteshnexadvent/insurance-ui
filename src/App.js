import React from 'react';
import './App.css';
import Index from './components/Index';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blogsread from './pages/Blogsread';
import AboutUs from './pages/AboutUs';
import JoinTeam from './pages/JoinTeam';
import Booking from './pages/Booking';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/blogread' element={<Blogsread></Blogsread>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/join' element={<JoinTeam></JoinTeam>}></Route>
          <Route path='/booking' element={<Booking></Booking>}></Route>
          <Route path='/privacy' element={<Privacy></Privacy>}></Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
