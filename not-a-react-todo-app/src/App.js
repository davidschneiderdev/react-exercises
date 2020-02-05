import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
        <div>
          <h1>{this.state.text}</h1>
          <ul>
            {this.state.items.map((item, index) => {
              return(
                <li 
                  key={index}
                >{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log('You just submitted');
    this.setState({
      items: [...this.state.items, this.state.text]
    })
  }

  _updateText = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }
}

export default App;
