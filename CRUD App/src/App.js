import React, { useState } from "react";
import AddNote from "./components/AddNote.js";
import EditNote from "./components/EditNote.js";
import TestDiv from "./components/TestDiv.js";
import "./styles/App.scss";

// TO DO:
// - final styling changes

const noteData = [
  { id: 1, title: "Note 1", text: "lorem ipsum blah blah blah blah" },
  { id: 2, title: "Note 2", text: "lorem ipsum blah blah blah blah" },
  { id: 3, title: "Note 3", text: "lorem ipsum blah blah blah blah" }
];

// var to assign note IDs without overwriting (incremented in addNote())
var idAssigner = noteData.length;

export default function App() {
  // default state
  const [notes, setNotes] = useState(noteData);
  const [editing, setEditing] = useState(false);
  const initialNoteState = { id: null, title: "", text: "" };
  const [currentNote, setCurrentNote] = useState(initialNoteState);

  // add note to notes
  const addNote = (note) => {
    // incrememt idAssigner and set value to id
    idAssigner += 1;
    note.id = idAssigner;
    setNotes([...notes, note]);
  };

  // filter through notes, keep all notes that don't match id passed in
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // enable editing and select current note
  const editNote = (note) => {
    setEditing(true);
    setCurrentNote({ id: note.id, title: note.title, text: note.text });
  };

  // disable editing and apply updated info to selected note
  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <div className="App">
      <h1>CRUD Notecard App</h1>
      <div className="flexRow">
        {editing ? (
          <div className="flexSection editing">
            <h2>Edit Note</h2>
            <EditNote
              setEditing={setEditing}
              currentNote={currentNote}
              updateNote={updateNote}
            />
          </div>
        ) : (
          <div className="flexSection">
            <h2>Add Notecard</h2>
            <AddNote addNote={addNote} />
          </div>
        )}
        <div className="flexTable">
          <TestDiv notes={notes} editNote={editNote} deleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}
