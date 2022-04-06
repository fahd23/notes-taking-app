import React from "react";
import "./sidebar.css";
import "../../App.css";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineLabel, MdArchive, MdDelete } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar-btn">
        <RiPagesLine /> Notes
      </p>
      <p className="sidebar-btn">
        <MdOutlineLabel /> Label
      </p>
      <p className="sidebar-btn">
        <MdArchive /> Archive
      </p>
      <p className="sidebar-btn">
        <MdDelete /> Delete
      </p>
    </div>
  );
}
