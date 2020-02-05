import React from 'react';

function SearchBar({
    text,
    handleChange
}) {
    return(
        <input 
            onChange={(event) => {
                handleChange(event.target.value)
            }}
            value={text}
        />
    );
}

export default SearchBar;