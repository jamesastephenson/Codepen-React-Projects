import React, { useState } from "react";

export default function AddNote(props) {
  const initialNoteState = { id: null, title: "", text: "" };
  const [note, setNote] = useState(initialNoteState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!note.title || !note.text) return;

        props.addNote(note);
        setNote(initialNoteState);
      }}
    >
      <label>Note Title</label>
      <input
        className="inputNoteTitle"
        type="text"
        name="title"
        size="50"
        maxLength="50"
        value={note.title}
        onChange={handleInputChange}
      />
      <label>Text</label>
      <input
        className="inputNoteText"
        type="text"
        name="text"
        size="50"
        maxLength="140"
        value={note.text}
        onChange={handleInputChange}
      />
      <button className="button">Add new note</button>
    </form>
  );
}
