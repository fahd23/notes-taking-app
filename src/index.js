import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesProvider } from "context/notes-context";
ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <Router>
        <App />
      </Router>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
