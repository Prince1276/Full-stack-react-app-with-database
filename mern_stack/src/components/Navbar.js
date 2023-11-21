import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Exercise Tracker
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create exercise log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
