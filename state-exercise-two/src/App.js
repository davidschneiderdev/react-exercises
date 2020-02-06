import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Best Calculator</h1>
        <input 
            type="number" 
            value={this.state.num1}
            onChange={(event) => {
              this._updateNumber('num1', event.target.value)
            }}
        />
        <input 
            type="number" 
            value={this.state.num2}
            onChange={(event) => {
              this._updateNumber('num2', event.target.value)
            }}
        />
        <br />
        <br />
        <button
          onClick={this._add}>+</button>
        <button
          onClick={this._subtract}>-</button>
        <button
          onClick={this._multiply}>*</button>
        <button
          onClick={this._divide}>/</button>
        <button
          onClick={this._reset}>Reset</button>
        <output>
          <h1>Output: {this.state.result}</h1>
        </output>
      </div>
    );
  }

  _updateNumber = (key, newNumber) => {
    this.setState({
      [key]: parseInt(newNumber, 10)
    })
  }



  _add = () => {
    const result = this.state.num1 + this.state.num2
    this.setState({
      result
    })
  }

  _subtract = () => {
    const result = this.state.num1 - this.state.num2
    this.setState({
      result
    })
  }

  _multiply = () => {
    const result = this.state.num1 * this.state.num2
    this.setState({
      result
    })
  }

  _divide = () => {
    const result = this.state.num1 / this.state.num2
    this.setState({
      result
    })
  }

  _reset = () => {
    this.setState({
      num1: 0,
      num2: 0,
      result: 0
    })
  }


}


export default App;
