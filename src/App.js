import React from 'react';
import './App.css';
import NavBar from './NavBar';

const App = () => {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <header className="App-header">
        <h1>Welcome to Wasmo!</h1>
      </header>
    </div>
  );
};

export default App;
