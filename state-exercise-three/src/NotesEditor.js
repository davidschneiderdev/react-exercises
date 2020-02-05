import React from 'react';

function NoteEditor({
    noteContent,
    updateNoteContent,
    updateNoteTitle
}) {
    return (
        <div>
            <textarea 
                onChange={(event) => {
                    updateNoteTitle(event.target.value, noteContent[0])
                }}
                value={noteContent[1]}></textarea>
            <textarea 
                onChange={(event) => {
                    updateNoteContent(event.target.value, noteContent[0])
                }}
                value={noteContent[2]}></textarea>
        </div>
    )

}

export default NoteEditor;