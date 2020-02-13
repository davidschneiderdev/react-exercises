import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            textColor: 'green'
        }
    };

    
    render() {
        return(
            <div>
                <button
                    onClick={this._HandleClick}
                    >+</button>
                <h1 style={{color: this.state.textColor}}>{this.state.count}</h1>
            </div>
        );
    }

    _HandleClick = () => {
        this._Increment();
        this._ToggleColor();
    }

    _Increment = () => {

        this.setState({
            count: this.state.count + 1,
            
        });

    }

    _ToggleColor = () => {

        if (this.state.textColor === 'green') {
            this.setState({
                textColor: 'red'
            })
        } else {
            this.setState({
                textColor: 'green'
            })
        }

    }








}





export default Counter;