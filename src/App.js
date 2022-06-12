import React from 'react';
import catgun from './images/catgun.png';
import chainsaw from './images/chainsaw.PNG';
import kara from './images/knk.png'
import tsukihime from './images/tsukihime.png'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
// import Charts from './components/pages/Charts'

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path='/Charts' exact component={Charts}/>
          </Switch>
        </Navbar>
      </Router>

      <header className="App-header">
        <p>
          Catgun
        </p>
        <img src={catgun} className="lol-logo" alt="meowgun" height={300} width={300}/>

        <p>Anime</p>
        <img src={kara} className="lol-logo" alt='animestuff' height={300} width={300}/>
        <img src={tsukihime} className="lol-logo" alt='animestuff' height={300} width={300}/>
      </header>
    </div>
  );
}

export default App;
