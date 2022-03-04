const router = require('express').Router();
const {nanoid} = require('nanoid');
const notes = require('../../db/db.json');
const { newNote, validateNote, updateNotes } = require('../../lib/dbFunctions');

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

router.delete("/notes/:id", (req,res) => {
    for(let i=0; i<notes.length; i++){
        if(notes[i].id === req.params.id){
            notes.splice(i,1);
            updateNotes(notes);
            break;
        }
    }
    res.json(notes);
})

module.exports = router;