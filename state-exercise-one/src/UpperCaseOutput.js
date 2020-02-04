import React from 'react';

function UpperCaseOutput({textValue}) {
    return(
        <div>
            {
                textValue.toUpperCase()
            }
        </div>
    )
}

export default UpperCaseOutput;