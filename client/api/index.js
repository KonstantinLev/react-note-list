/**
 * Created by Konstantin on 22.05.2017.
 */
import axios from 'axios';

import { api } from '../../config/config.json';

export default {
    listNotes() {
        return axios.get(`${api}/notes`);
    },

    createNote(data) {
        return axios.post(`${api}/notes`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${api}/notes/${noteId}`);
    }
}
