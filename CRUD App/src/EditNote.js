import React, { useState } from "react";

export default function EditNote(props) {
  const [note, setNote] = useState(props.currentNote);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.updateNote(note.id, note);
      }}
    >
      <label>Note Title</label>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleInputChange}
      />
      <label>Text</label>
      <input
        type="text"
        name="text"
        value={note.text}
        onChange={handleInputChange}
      />
      <button className="button">Update note</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  );
}
