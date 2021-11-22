import catgun from './images/catgun.png';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path='/' exact />
          </Switch>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
