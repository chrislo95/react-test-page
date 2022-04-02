import React from 'react';
import catgun from './images/catgun.png';
import chainsaw from '/images/chainsaw.PNG';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' exact component={Home}/>
          </Routes>
        </Navbar>
      </Router>

      <header className="App-header">
        <p>
          Cat gun
        </p>
        <img src={catgun} className="lol-logo" alt="meowgun" height={300} width={300}/>
        <img src={chainsaw} alt='animestuff' height={300} width={300}/>
      </header>
    </div>
  );
}

export default App;
