import React from "react";
import { Link, Route } from "react-router-dom";

const menu = [
  {
    label: "Home",
    to: "/",
    exact: true,
  },
  {
    label: "About",
    to: "/about",
    exact: false,
  },
  {
    label: "Contact",
    to: "/contact",
    exact: false,
  },
  {
    label: "Products",
    to: "/products",
    exact: false,
  },
];

const MenuLink = ({ label, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        const active = match ? " active" : "";
        return (
          <li className={"nav-item" + active}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            {menu.map((item, index) => (
              <MenuLink
                key={index}
                label={item.label}
                to={item.to}
                exact={item.exact}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
