import React from "react";
import { MdOutlineDelete, MdOutlineArchive } from "react-icons/md";
import { useNotes } from "context/notes-context";

export function NotesList({ notesDiv }) {
  const { deleteDispatch } = useNotes();
  return (
    <div className="notes-list">
      {notesDiv &&
        notesDiv.map((note) => {
          return (
            <div className="notes-div" key={note.id}>
              <div>Created {note.date}</div>
              <h3>{note.title}</h3>
              <p>{note.notes}</p>
              <div className="notes-footer">
                <button className="edit-btn">Edit</button>
                <div className="notes-icon-footer">
                  <button className="icon-btn">
                    <MdOutlineArchive />
                  </button>
                  <button
                    onClick={() => {
                      deleteDispatch({
                        type: "ADD_TO_DELETES",
                        payload: note,
                      });
                    }}
                    className="icon-btn"
                  >
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
