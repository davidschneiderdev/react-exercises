import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    constructor(props) {
        // Register Nav as one of the React Components
        // on the page.
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        return(
            this.state.isOpen ?
                <div>
                    <a onClick={this._toggleMenu}>🍔</a>
                    <ul>
                        
                        {
                            this.props.links.map((item, index) => {
                            return <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                            })
                        }
                    </ul>
                </div>
                :
                <a onClick={this._toggleMenu}>🍔</a>
                

        );
    }

    //Arrow function syntax creates instances of function
    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('Menu toggled');
        });
    }
}


export default Nav;