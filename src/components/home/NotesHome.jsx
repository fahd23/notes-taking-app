import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./notesHome.css";
import { NotesList } from "./NotesList";

const NotesHome = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [notesDiv, setNotesDiv] = useState([]);

  return (
    <div className="container">
      <input
        type="text"
        maxlength="30"
        placeholder="Enter The Title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        maxlength="100"
        placeholder="Write the Notes here"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      ></textarea>
      <button
        className="btn"
        onClick={() => {
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
        }}
      >
        Save
      </button>
      <NotesList notesDiv={notesDiv} setNotesDiv={setNotesDiv}></NotesList>
    </div>
  );
};

export default NotesHome;
