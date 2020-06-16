import React from 'react';
import logo from '../../images/logo.svg';
import info from '../../../package.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React App: { info.version }
        </a>
      </header>
    </div>
  );
}

export default App;
