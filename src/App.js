import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Loader } from './components';

function App() {
  return (
    <div className="App">
      <Loader></Loader>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
