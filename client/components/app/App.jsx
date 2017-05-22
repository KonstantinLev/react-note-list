import React from 'react';

import NoteEditor from '../notes_editor/NotesEditor.jsx';
import NotesGrid from '../notes_grid/NotesGrid.jsx';

import './app.less';

import NotesStore from '../../stores/index';
import NotesActions from '../../actions/index';



function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        NotesActions.loadNotes();
    },

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    },

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    },

    handleNoteAdd(data) {
        NotesActions.createNote(data);
    },

    render() {
        return (
            <div className='app'>
                <h2 className='app-header'>Заметки</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
