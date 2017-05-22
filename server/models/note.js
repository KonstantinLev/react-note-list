/**
 * Created by Konstantin on 22.05.2017.
 */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title : { type: String, required: true },
    text : { type: String, required: true },
    color : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Note', NoteSchema);