import React, { useState } from "react";
import AddNote from "./AddNote.js";
import EditNote from "./EditNote.js";
import NoteTable from "./NoteTable.js";
import TestDiv from "./TestDiv.js";
import "./styles.scss";

export default function App() {
  const noteData = [
    { id: 1, title: "Note 1", text: "lorem ipsum blah blah blah blah" },
    { id: 2, title: "Note 2", text: "lorem ipsum blah blah blah blah" },
    { id: 3, title: "Note 3", text: "lorem ipsum blah blah blah blah" }
  ];

  const [notes, setNotes] = useState(noteData);
  const [editing, setEditing] = useState(false);

  const initialNoteState = { id: null, title: "", text: "" };
  const [currentNote, setCurrentNote] = useState(initialNoteState);

  const addNote = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setEditing(true);
    setCurrentNote({ id: note.id, title: note.title, text: note.text });
  };

  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  // need to add edit user and update user functions

  return (
    <div className="App">
      <h1>CRUD Notecard App</h1>
      <div className="flexRow">
        {editing ? (
          <div className="flexSection">
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
          {/* old component <TestDiv notes={notes} editNote={editNote} deleteNote={deleteNote} /> */}
          <TestDiv notes={notes} editNote={editNote} deleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}
