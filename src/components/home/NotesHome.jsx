import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { NotesList } from "./NotesList";
import { TiTick, TiCancel } from "react-icons/ti";
import "./notesHome.css";

const NotesHome = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(false);
  const [notesDiv, setNotesDiv] = useState([]);
  const saveNotes = () => {
    notes &&
      title &&
      setNotesDiv((prev) => [
        ...prev,
        {
          id: uuid(),
          title: title,
          notes: notes,
          date: new Date().toLocaleString(),
        },
      ]);
    setNotes("");
    setTitle("");
    if (!notes && !title) {
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="input-conatiner">
        <input
          className="title-input"
          type="text"
          maxlength="30"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(false);
          }}
        />
        <textarea
          className="notes-input"
          cols="30"
          rows="10"
          maxlength="100"
          placeholder="Take a Notes"
          onChange={(e) => {
            setNotes(e.target.value);
            setError(false);
          }}
          value={notes}
        ></textarea>
        <div className="input-container-footer">
          <button
            className="input-control-btn"
            onClick={() => {
              setNotes("");
              setTitle("");
            }}
          >
            <TiCancel />
          </button>
          <button className="input-control-btn" onClick={saveNotes}>
            <TiTick />
          </button>
        </div>
      </div>

      {error && (
        <div className="error-msg">Please Enter Both Title and Notes</div>
      )}
      <NotesList notesDiv={notesDiv} setNotesDiv={setNotesDiv}></NotesList>
    </div>
  );
};

export default NotesHome;
