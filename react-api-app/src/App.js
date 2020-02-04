import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const API_ENDPOINT = 'https://swapi.co/api/people/25/';

function urlForId(id) {
  return `https://swapi.co/api/people/${id}/`
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      currentId: 1
    }
  }

  componentDidMount() {
    axios.get(urlForId(this.state.currentId))
      .then(response => {
          console.log(response.data.name);
          this.setState({
            name: response.data.name
          })
      })
  }

  render() {
    
  
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.name || <img src={logo} />
          }
        <button onClick={this._getNextCharacter}>Next Character</button>
        </header>
      </div>
    );
  }

  _getNextCharacter = () => {
    this.setState({
      currentId: this.state.currentId + 1
    }, () => {
      console.log(`New currentId is ${this.state.currentId}.`);
      this._makeAjaxRequest();
    });
  }

  _makeAjaxRequest = () => {
    axios.get(urlForId(this.state.currentId))
      .then(response => {
        console.log(response.data.name);
        this.setState({
          name: response.data.name
        })
      })
      .catch(err => {
        this._getNextCharacter();
      })
  }
}


export default App;
