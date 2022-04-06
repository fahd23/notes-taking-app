import React from "react";
import "App.css";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar flex jtfy-c-spce-arnd">
      <h1 className="logo">Notes App</h1>
      <button className="btn warning">Add Notes</button>
    </nav>
  );
}
