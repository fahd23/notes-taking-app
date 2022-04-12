import React from "react";
import "App.css";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="navbar flex jtfy-c-spce-arnd align-ctr">
      <div className="nav-logo">
        <img
          className="logo"
          src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1649584340/images-removebg-preview_3_hvrg8t.png"
          alt="Notes Logo"
        />
        <h1 className="logo-name">Notes App</h1>
      </div>
      <div className="profile-icon">
        <CgProfile />
      </div>
    </nav>
  );
}
