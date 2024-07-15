import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
