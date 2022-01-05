import React from "react";
import "./styles.scss";

export default function NoteTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Note Name</th>
          <th>Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* map through note array, output props to table */}
        {props.notes.length > 0 ? (
          props.notes.map((note) => (
            <tr>
              <td>{note.title}</td>
              <td>{note.text}</td>
              <td>
                <button
                  onClick={() => {
                    props.editNote(note);
                  }}
                  className="button"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.deleteNote(note.id);
                  }}
                  className="button red"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No notes</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
