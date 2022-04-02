import React from 'react';
import chainsaw from './images/chainsaw.PNG';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function charts() {

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
          Chainsaw 
        </p>
        <img src={chainsaw} className="lol-logo" alt="chainsaw" height={300} width={300}/>
      </header>

    </div>


}
