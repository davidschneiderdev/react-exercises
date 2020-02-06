import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyUrl = "https://api.giphy.com/v1/gifs/random?api_key=fFwF9abywL70BmXoywYq4yDMdBxoKH93&tag=cat&rating=G";

class GiphyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            giphys: []
        }
    }

/*
- a button
- when you click the button, it runs a helper fn
    - to begin with, console.log

- some state
    - to begin with, just an empty array

- update your helper fn
    - it should add the string "hello" to the array

- open the component inspector
- make sure that the state array should get another
    "hello" string added to it every time you click
    the button
*/

    render() {
        return (
            <div>
                <h1>giphy app</h1>
                <button
                    onClick={this._addHello}>say hello
                </button>
                {
                    this.state.giphys.map(giphy => (
                        <GiphyImage giphy={giphy} />
                    ))
                }
            </div>
        );
    }

    _addHello = () => {

        axios.get(giphyUrl)
            .then(response => {
                console.log(response.data.data.images.downsized_large);
                this.setState({
                    giphys: [
                        response.data.data.images.downsized_large,
                        ...this.state.giphys
                    ]
                });
            })
            .catch(err => {
                console.log('No giphy for you')
            })

        
    }
}

export default GiphyApp;