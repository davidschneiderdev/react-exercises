import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div>
      <Greet 
        whom="Cthulu"
        how="Salutations"
      />
      <Greet 
        whom="Partner"
        how="Howdy"
      />
      <Greet 
        whom="Mattie"
        how="Ahoy"
      />
    </div>
  );
}

export default App;
