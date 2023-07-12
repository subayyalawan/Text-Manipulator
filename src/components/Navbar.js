import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg mb-3 bg-${props.theme} navbar-${props.theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.heading}
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                {props.heading}
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                About
              </a> */}
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleTheme}
            />

            <label
              className={`form-check-label text-${
                props.theme === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault">
              enable {props.theme} mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  heeading: PropTypes.string,
};

export default Navbar;
