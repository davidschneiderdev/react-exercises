import React from 'react';

function NoteEditor({
    note,
    updateNoteContent,
    updateNoteTitle
}) {

    console.log({note});

    return (
        <div>
            <textarea 
                onChange={(event) => {
                    updateNoteTitle(event.target.value, note.id)
                }}
                value={note.title}></textarea>
            <textarea 
                onChange={(event) => {
                    updateNoteContent(event.target.value, note.id)
                }}
                value={note.copy}></textarea>
        </div>
    )

}

export default NoteEditor;