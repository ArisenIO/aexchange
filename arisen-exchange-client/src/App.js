import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Transaction from './component/Transaction'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Transaction/>
          <Home/>
      </header>
    </div>
  );
}

export default App;
