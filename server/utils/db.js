/**
 * Created by Konstantin on 22.05.2017.
 */

import mongoose from "mongoose";

import config from '../../config/config.json';

import '../models/note';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    //mongoose.connect(`mongodb://localhost/notes`);
}

export function getAllNotes(id) {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

