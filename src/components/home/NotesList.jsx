import React from "react";
import { MdOutlineDelete } from "react-icons/md";

export function NotesList({ notesDiv, setNotesDiv }) {
  function deletefunc(id) {
    const newNotes = notesDiv.filter((note) => note.id !== id);
    setNotesDiv(newNotes);
  }
  return (
    <div className="notes-list">
      {notesDiv &&
        notesDiv.map(({ id, title, notes, date }) => {
          return (
            <div className="notes-div" key={id}>
              <h3>{title}</h3>
              <p>{notes}</p>
              <div className="notes-footer">
                <span>{date}</span>
                <button onClick={() => deletefunc(id)} className="delete-btn">
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
