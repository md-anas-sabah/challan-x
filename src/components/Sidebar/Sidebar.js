import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link>
        <p>Home</p>
      </Link>
      <Link>
        <p>Challan Enquiry</p>
      </Link>
      <Link>
        <p>About Us</p>
      </Link>
      <Link>
        <p>Services</p>
      </Link>
      <Link>
        <p>Guidelines</p>
      </Link>
      <Link>
        <p>Contact Us</p>
      </Link>

      <footer>
        <>@ 2022 Copyright: Challan-X</>
      </footer>
    </div>
  );
}

export default Sidebar;
