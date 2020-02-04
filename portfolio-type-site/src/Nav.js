import React from 'react';

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
                            this.props.links.map((link, index) => {
                            return <li key={index}>{link}</li>
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