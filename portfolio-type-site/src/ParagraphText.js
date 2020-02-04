import React from 'react';

function ParagraphText(props) {
    console.log(props);
    return(
        <div>
            <p>{props.content}</p>
      </div>
    );
}

export default ParagraphText;