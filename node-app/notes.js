const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'THIS IS YOUR NOTES.js FILE';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.bgGreen.bold('NEW NOTE(S) SAVED SUCCESSFULLY'));
    } else {
        console.log(chalk.bgRed.bold('TITLE ALREADY IN USE'));
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length)  {
        saveNotes(notesToKeep);   
        console.log(chalk.bgGreen.bold('NOTE REMOVED SUCCESSFULLY'));
    } else {
        console.log(chalk.bgRed.bold('TITLE NOT FOUND'));
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}