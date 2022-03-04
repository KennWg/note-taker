const router = require('express').Router();
const {nanoid} = require('nanoid');
const notes = require('../../db/db.json');
const { newNote, validateNote } = require('../../lib/dbFunctions');

router.get("/notes", (req,res) => {
    res.json(notes);
})

router.post("/notes", (req,res) => {
    if(!validateNote(req.body)){
        res.status(400).send('Please enter both a title and text for the note');
    } else {
        req.body.id = nanoid();
        const note = newNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;