/**
 * Created by Konstantin on 22.05.2017.
 */
import express from 'express';
import bodyParser from 'body-parser';

import { port } from  '../config/config.json';
import * as db from './utils/db';

db.setUpConnection();

const app = express();

//преобрахование запросов в json-формат
app.use( bodyParser.json() );

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.get('/notes', (req, res) => {
    db.getAllNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});


const server = app.listen(8080, () => {
    console.log(`Server is up and running on port ${port}`);
});