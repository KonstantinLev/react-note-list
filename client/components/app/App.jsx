import React from 'react';

import NoteEditor from '../notes_editor/NotesEditor.jsx';
import NotesGrid from '../notes_grid/NotesGrid.jsx';

import './App.less';

/*import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';



function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}*/

const App = React.createClass({
    /*getInitialState() {
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
    },*/

    handleNoteAdd(data) {
        console.log(data);
    },

    render() {
        return (
            <div className='app'>
                <h2 className='app-header'>Заметки</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid />
            </div>
        );
    },

    /*_onChange() {
        this.setState(getStateFromFlux());
    }*/
});

export default App;
