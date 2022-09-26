import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1>Challan-X</h1>
        <span>powered by</span>
        <h2>
          chandigarh <span>university</span>
        </h2>
      </div>
      <div className="nav-right">
        <div className="user-info">
          <Avatar />
          <p>username</p>
        </div>
        <Link to="/sign-in">
          <button>Sign-In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
