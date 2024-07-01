import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Drivers from './components/Drivers';
import Teams from './components/Teams';
import Schedule from './components/Schedule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
