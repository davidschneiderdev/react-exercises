import React from 'react';

import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

function GiphyApp() {
    return(
        <Router>
            <ul>
                <li><Link to="/giphy/dog">dog</Link></li>
                <li><Link to="/giphy/cat">cat</Link></li>
                <li><Link to="/giphy/fish">fish</Link></li>
            </ul>
        </Router>
    );
}

export default GiphyApp;