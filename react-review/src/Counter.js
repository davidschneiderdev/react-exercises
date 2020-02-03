import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        // "register" Counter as a 
        // normal React.Component.
        super(props);
        // Use React.Component's constructor
        // to set up Counter to work
        // with React
        this.state = {
            value: props.initialValue,
            changeBy: props.changeBy
        };
    }


    render() {
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this._incrementValue}>Add</button>
                <button onClick={this._decrementValue}>Subtract</button>
                <button onClick={this._resetValue}>Reset</button>
            </div>
        );
    }

    // Write helper functions as
    // arrow functions.
    // Arrow functions retain the 
    // correct value of the 'this' keyword
    _incrementValue = () => {
        this.setState({
            value: this.state.value + this.state.changeBy
        })
    }

    _decrementValue = () => {
        this.setState({
            value: this.state.value - this.state.changeBy
        })
    }

    _resetValue = () => {
        this.setState({
            value: this.props.initialValue
        })
    }


}

export default Counter;