// #1 You need to import React
import React from 'react';
// const React = require('react);

import logo from './logo.svg';
import './App.css';

import Greet from './Greet';

// #2 You always define a function (or a class)
function App() {
  return (
    <div>
      <h1>Hello, React</h1>
      <Greet whom="Alice" />
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// #3 You always export that function (or class)
export default App;
// module.exports = App;
