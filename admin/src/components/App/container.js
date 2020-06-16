import React from 'react';
<<<<<<< HEAD:admin/src/components/HelloWorld/container.js
import logo from '../../images/logo.svg';
=======
import info from '../package.json';
import logo from './logo.svg';
>>>>>>> master:admin/src/App.js
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
<<<<<<< HEAD:admin/src/components/HelloWorld/container.js
          rel="noopener noreferrer"
        >
          Learn React Sample App
=======
          rel="noopener noreferrer">
          Inventory: { info.version }
>>>>>>> master:admin/src/App.js
        </a>
      </header>
    </div>
  );
}

export default App;
