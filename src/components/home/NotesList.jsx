import React from "react";
import { MdOutlineDelete, MdOutlineArchive } from "react-icons/md";

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
              <div>Created {date}</div>
              <h3>{title}</h3>
              <p>{notes}</p>
              <div className="notes-footer">
                <button className="edit-btn">Edit</button>
                <div className="notes-icon-footer">
                  <button className="icon-btn">
                    <MdOutlineArchive />
                  </button>
                  <button onClick={() => deletefunc(id)} className="icon-btn">
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
