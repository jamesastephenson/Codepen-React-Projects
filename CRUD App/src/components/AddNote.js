import React, { useState } from "react";
import "../styles/UserInput.scss";

export default function AddNote(props) {
  // empty note data
  const initialNoteState = { id: null, title: "", text: "" };
  // set default state
  const [note, setNote] = useState(initialNoteState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // alert if Title or Text is missing and prevent submission
        if (!note.title || !note.text)
          return alert("Please fill the Note Title and Text");

        // add note to notes state (passed to App.js)
        props.addNote(note);
        // return to default state to await next input
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
      <textarea
        className="inputNoteText"
        type="text"
        name="text"
        size="50"
        rows="9"
        maxLength="280"
        value={note.text}
        onChange={handleInputChange}
      />
      <button className="button">Add new note</button>
    </form>
  );
}
