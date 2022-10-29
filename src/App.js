import React from 'react';
import catgun from './images/catgun.png';
import chainsaw from './images/chainsaw.PNG';
import kara from './images/knk.png';
import tsukihime from './images/tsukihime.png';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Home from './components/pages/Home';
import Charts from './pages/Charts.js';
import './App.css';
// import Charts from './components/pages/Charts'

function App() {
  return (

    <div className="App">

      <Router>
        <Navbar>
          <Routes>
            <Route exact path='/Charts'>
              <Charts />
            </Route>
            <Route exact path='/'>
              <App / >
            </Route>
          </Routes>
        </Navbar>
      </Router>

      <header className="App-header">
        <p>
          Catgun
        </p>
        <img src={catgun} className="lol-logo" alt="meowgunwow" height={300} width={300}/>

        <p>Anime</p>
        <img src={kara} className="lol-logo" alt='animestuff' height={300} width={300}/>
        <img src={tsukihime} className="lol-logo" alt='animestuff' height={300} width={300}/>
      </header>
    </div>
  )
}

export default App;
