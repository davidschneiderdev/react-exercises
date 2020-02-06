import React from 'react';
import {Link} from 'react-router-dom';

function Nav({links}) {
    return (
        <div>
            <ul>
                {
                    links.map((item, index) => {
                        return <li key={index}>
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Nav;