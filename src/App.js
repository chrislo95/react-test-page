{/*import logo from './logo.svg';*/}
import catgun from './images/catgun.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are now detained. You will be taken to horny jail.
          Follow the cat's orders and nothing will happen.
        </p>
        <img src={catgun} className="lol-logo" alt="meowgun" height={300} width={300}/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
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
