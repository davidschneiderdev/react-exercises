import React from 'react';

import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NotesEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
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
                <NewNote />
                <SearchBar 
                    handleChange={this._setSearchText}
                    text={this.state.searchText} />
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick={this._selectNote}
                />
                <br />
                <NoteEditor 
                    note={this._getContentById() || {}}
                    updateNoteContent={this._updateNoteContent}
                    updateNoteTitle={this._updateNoteTitle}
                />
                <br />
            </div>
        );
    }

    _getFilteredNotes = () => {
        const filteredArray = this.state.notes.filter(note => {

            const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText);
            const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText);

            return titleDoesMatch || copyDoesMatch;

        });
        // console.log(filteredArray);
        return filteredArray;
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
            console.log(`updated current ${this.state.currentNoteId}`);
        })
    }

    _getContentById = () => this.state.notes.find(note => note.id === this.state.currentNoteId);

    _updateNoteTitle = (newTitle, noteId) => {
        const arrayCopy = [...this.state.notes];
        const noteIndex = arrayCopy.findIndex(note => note.id === noteId);
        arrayCopy[noteIndex].title = newTitle;

        this.setState({
            notes: arrayCopy
        })
    }

    _updateNoteContent = (newContent, noteId) => {
        const arrayCopy = [...this.state.notes];
        const noteIndex = arrayCopy.findIndex(note => note.id === noteId);
        arrayCopy[noteIndex].copy = newContent;

        this.setState({
            notes: arrayCopy
        })
    }

}

export default NotesApp;