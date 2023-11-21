import React from "react";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Test
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/bppriceList">
              BP price detail
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/eppriceList">
              EP Price Detail
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComponent;
