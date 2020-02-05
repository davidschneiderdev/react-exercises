import React from 'react';

import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NotesEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: 'this is the search text',
            notes: [
                {
                    id: 'a1b2c3',
                    title: 'first note',
                    copy: 'la la la'
                },
                {
                    id: '123',
                    title: 'second note',
                    copy: 'ba ba ba'
                },
                {
                    id: '456',
                    title: 'third note',
                    copy: 'ha ha ha'
                }
            ],
            currentNoteId: ''
        }
    }

    render() {
        return(
            <div>
                <h1>Best Notes App Ever</h1>
                <NotesList 
                    notes={this.state.notes}
                    handleClick={this._selectNote}
                />
                <NewNote />
                <br />
                <br />
                <NoteEditor />
                <br />
                <br />
                <SearchBar 
                    handleChange={this._setSearchText}
                    text={this.state.searchText} />
            </div>
        );
    }

    _setSearchText = (searchText) => {
        this.setState({
            searchText
        }, () => {
            console.log('updated search text');
        })
    }

    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id');
        })
    }
}

export default NotesApp;