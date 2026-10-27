import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <span>✦</span>
        <h2>Nexa</h2>
      </div>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
    </div>
  );
}
