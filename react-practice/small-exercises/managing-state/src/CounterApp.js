import React from 'react';
import Counter from './Counter';

class CounterApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counters: ['counter']
        }
    }

    render() {
        return(
            <div>
                <button
                    onClick={this._AddCounter}>
                    Add Counter
                </button>
                <button
                    onClick={this._DeleteCounter}>
                    Delete Counter
                </button>
                {
                    this.state.counters.map(counter => (
                        <Counter />
                    ))
                }
            </div>
        );
    }

    _AddCounter = () => {
        this.setState({
            counters: [...this.state.counters, 'counter']
        })
    }

    _DeleteCounter = () => {
        const newArray = [...this.state.counters];
        newArray.pop();
        this.setState({
            counters: newArray
        })
    }
}

export default CounterApp;