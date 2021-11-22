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
          You are now detained. You will be taken to horny jail.
          Follow the cat's orders and nothing will happen.
        </p>
        <img src={catgun} className="lol-logo" alt="meowgun" height={300} width={300}/>
        <p>
          Edit <code>src/App.js</code> and save to reload. re
        </p>
      </header>
    </div>
  );
}

export default App;
