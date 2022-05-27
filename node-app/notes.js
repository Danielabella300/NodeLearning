const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'THIS IS YOUR NOTES.js FILE';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => {
        return note.title === title
    })
    // const duplicateNotes = notes.filter(function (note) {
    // return note.title === title
    //}) 
    debugger
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen.bold('NEW NOTE(S) SAVED SUCCESSFULLY'));
    } else {
        console.log(chalk.bgRed.bold('TITLE ALREADY IN USE'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen.bold('NOTE REMOVED SUCCESSFULLY'));
        console.log(title)
    } else {
        console.log(chalk.bgRed.bold('TITLE NOT FOUND'));
    }
}

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'))
    var i = 0;
    for (i = 1; i <= notes.length - 1; i++) {
        notes.forEach((note) => {
            console.log("Title " + i + ": " + note.title + " - Body " + i + ": " + note.body)
            i++;
        })
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title
    });

    if (note) {
        console.log(chalk.bgGreen.bold("NOTE WITH THAT TITLE FOUND: " + note.title));
        console.log("NOTE BODY: " + note.body)
    } else {
        console.log(chalk.bgRed.bold('NO NOTES FOUND WITH THAT TITLE'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}