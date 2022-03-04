const router = require('express').Router();
const notes = require('../../db/db.json');
const { newNote, validateNote } = require('../../lib/dbFunctions');

router.get("/api/notes", (req,res) => {
    res.json(notes);
})

router.post("/api/notes", (req,res) => {
    if(!validateNote(req.body)){
        res.status(400).send('Please enter both a title and text for the note');
    } else {
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;