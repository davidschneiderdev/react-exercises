import React from 'react';

function Greet({
    whom, 
    how}) {
    return (
        <div className="card greet">
            <h1>{how}, {whom}.</h1>
        </div>
    );
}

export default Greet;