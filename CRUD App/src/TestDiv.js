import React from "react";
import "./styles.scss";

export default function NoteTable(props) {
  return (
    <div className="table">
      {/* map through notes, display "no notes" if notes is empty */}
      {props.notes.length > 0 ? (
        props.notes.map((note) => (
          <div className="note">
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            {/* Edit Button */}
            <button
              onClick={() => {
                props.editNote(note);
              }}
              className="button"
            >
              Edit
            </button>
            {/* Delete Button */}
            <button
              onClick={() => {
                props.deleteNote(note.id);
              }}
              className="button red"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h3>No notes</h3>
      )}
    </div>
  );
}
