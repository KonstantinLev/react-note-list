import React from 'react';

import './notes_editor.less'
import ColorPicker from '../color_picker/ColorPicker.jsx';

const NotesEditor = React.createClass({

    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    },

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleColorChange(color) {
        this.setState({ color });
    },

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF' });
    },

    render(){
        return (
            <div className='note-editor'>
                <input
                    type='text'
                    className='note-editor-title'
                    placeholder='Введите заголовок заметки'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Введите текст заметки'
                    rows={5}
                    className='note-editor-text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='note-editor-footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='note-editor-button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Создать
                    </button>
                </div>
            </div>
        );
    }

});

export default NotesEditor;