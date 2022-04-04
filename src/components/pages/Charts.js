import React from 'react';
import chainsaw from './src/images/chainsaw.PNG';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Pages.css';

function Charts() {

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
          Chainsawman 
        </p>
        <img src={chainsaw} className="lol-logo" alt="chainsaw" height={300} width={300}/>
      </header>

    </div>


}
export default Charts;