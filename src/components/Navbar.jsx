import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frebeccaskilbeck%2Ffiles%2F2019%2F02%2FMaintianing-Motivation-in-employees-Blog-Graphic-1200x861.jpg"
            width="30"
            height="30"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to="/">List All</Link>
          </a>

          <a className="navbar-item">
            <Link to="/list">List by ID</Link>
          </a>

          <a className="navbar-item">
            <Link to="/save">Save employee</Link>
          </a>

          <a className="navbar-item">
            <Link to="/delete">Delete employee</Link>
          </a>

          <a className="navbar-item">
            <Link to="/update">Update an employee</Link>
          </a>

          <a className="navbar-item">
            <Link to="/increase">Increase salary</Link>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;