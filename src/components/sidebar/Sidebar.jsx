import React from "react";
import "./sidebar.css";
import "App.css";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineLabel, MdArchive, MdDelete } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-btn">
        <RiPagesLine /> Notes
      </Link>
      <Link to="/label" className="sidebar-btn">
        <MdOutlineLabel /> Label
      </Link>
      <Link to="/archive" className="sidebar-btn">
        <MdArchive /> Archive
      </Link>
      <Link to="/delete" className="sidebar-btn">
        <MdDelete /> Delete
      </Link>
    </div>
  );
}
