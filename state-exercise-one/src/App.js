import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Input from './Input';
import Output from './Output';
import Reset from './Reset';
import UpperCaseOutput from './UpperCaseOutput';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textValue: 'this is the text value in state'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input 
            textValue={this.state.textValue}
            _updateText={this._updateText}
          />
          <Output 
            textValue={this.state.textValue}
          />
          <UpperCaseOutput 
            textValue={this.state.textValue}
          />
          <Reset
            _reset={this._resetText}
           />
        </header>
      </div>
    );
  }

  _updateText = (event) => {
    console.log(event.target.value);
    this.setState({
      textValue: event.target.value
    })
  }

  _resetText = () => {
    this.setState({
      textValue: ''
    })
  }

}

export default App;
