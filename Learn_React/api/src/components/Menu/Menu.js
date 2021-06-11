import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">CALL API</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Products</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
