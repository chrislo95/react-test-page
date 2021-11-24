import React from 'react';
import catgun from './images/catgun.png';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' exact />
          </Routes>
        </Navbar>
      </Router>

      <header className="App-header">
        <p>
          Cat gun
        </p>
        <img src={catgun} className="lol-logo" alt="meowgun" height={300} width={300}/>
      </header>
    </div>
  );
}

export default App;
