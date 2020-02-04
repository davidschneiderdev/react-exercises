import React from 'react';

function Input({
    textValue,
    _updateText
    }) {
    return(
        <form onSubmit={_updateText}>
            <p>Enter text here</p>
            <input 
                value={textValue}
                onChange={_updateText}>
            </input>
        </form>
    )
}

export default Input;