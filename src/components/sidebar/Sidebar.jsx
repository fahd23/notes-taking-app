import React from "react";
import "./sidebar.css";
import "App.css";
import { NavLink } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineLabel, MdArchive, MdDelete } from "react-icons/md";

export default function Sidebar() {
  const getActiveLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--yellow)" : "",
    color: isActive ? "var(--secondary-color)" : "",
    borderTopRightRadius: isActive ? "10px" : "",
    borderBottomRightRadius: isActive ? "10px" : "",
    padding: isActive ? "6px 10px" : "",
  });
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-btn" style={getActiveLinkStyle}>
        <RiPagesLine /> Notes
      </NavLink>
      <NavLink to="/label" className="sidebar-btn" style={getActiveLinkStyle}>
        <MdOutlineLabel /> Label
      </NavLink>
      <NavLink to="/archive" className="sidebar-btn" style={getActiveLinkStyle}>
        <MdArchive /> Archive
      </NavLink>
      <NavLink to="/delete" className="sidebar-btn" style={getActiveLinkStyle}>
        <MdDelete /> Delete
      </NavLink>
      <button className="btn warning add-btn">Add Notes</button>
    </div>
  );
}
