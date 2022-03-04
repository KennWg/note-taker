const fs = require('fs');
const path = require('path');

const newNote = (body, notesArray) => {
    notesArray.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
};

const validateNote = note => {
    if (!note.title || !note.text) {
        return false;
    } else {
        return true;
    }
};

const updateNotes = notesArray => {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
};

module.exports = { newNote, validateNote, updateNotes }