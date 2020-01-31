import React from 'react';

// function _handleMouseOver() {
//     console.log('Item has been moused over.');
// }

// const groceries = [
//     'Bread',
//     'Butter',
//     'Beer'
// ]

class GroceryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: [
                'Bread',
                'Butter',
                'Beer'
            ]
        };

    }

    render() {
        return (
            // You can only return one "thing" inside a function return
            <div>
                <h1>Grocery List</h1>
                 <ul>
                    {
                        this.state.groceries.map((grocery, i) => (
                            <li onClick={() => {
                                this._handleClick(i)
                            }}>{grocery}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    _handleClick = (index) => {
        console.log(index);
        const newGroceries = [
            ...this.state.groceries
        ];
        newGroceries[index] += '!';

        this.setState({
            groceries: newGroceries
        });
    }
}

// JSX - the HTML being written inside a React function

export default GroceryList;

// export MoviePoster;