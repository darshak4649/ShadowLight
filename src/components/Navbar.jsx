import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#007bff", textAlign: "center" }}>
      <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>Home</Link>
      <Link to="/login" style={{ margin: "0 10px", color: "#fff" }}>Login</Link>
      <Link to="/contact" style={{ margin: "0 10px", color: "#fff" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
