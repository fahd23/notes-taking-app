import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage, Labelpage, Archivepage, Deletepage } from "pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/label" element={<Labelpage />} />
        <Route path="/archive" element={<Archivepage />} />
        <Route path="/delete" element={<Deletepage />} />
      </Routes>
    </div>
  );
}

export default App;
