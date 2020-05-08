import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-red-500'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Map />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />

    </div>
  );
}

export default App;
