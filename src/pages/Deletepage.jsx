import "App.css";
import React from "react";
import { Navbar, Sidebar } from "components";
import { NotesList } from "components/home/NotesList";
import { useNotes } from "context/notes-context";

export default function Deletepage() {
  const {
    deleteState: { deletes },
  } = useNotes();
  return (
    <>
      <Navbar />
      <div className="flex no-flex-wrap ">
        <Sidebar />
        <div className="container">
          <NotesList notesDiv={deletes}></NotesList>
        </div>
      </div>
    </>
  );
}
