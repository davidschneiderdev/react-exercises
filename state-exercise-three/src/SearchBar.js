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
            placeholder="search notes"
        />
    );
}

export default SearchBar;