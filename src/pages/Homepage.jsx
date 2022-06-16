import React from "react";
import "App.css";
import { Navbar, Sidebar } from "components";
import NotesHome from "components/home/NotesHome";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="flex no-flex-wrap ">
        <Sidebar />
        <NotesHome />
      </div>
    </>
  );
}
