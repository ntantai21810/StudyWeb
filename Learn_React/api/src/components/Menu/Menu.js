import React from "react";
import { Route, Link } from "react-router-dom";

let menus = [
  {
    to: "/",
    exact: true,
    name: "Home",
  },
  {
    to: "/products",
    exact: true,
    name: "Products",
  },
];

const MenuLink = ({ to, exact, name }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      let itemClass = match ? "nav-item active" : "nav-item";
      return (
        <li className={itemClass}>
          <Link class="nav-link" to={to}>
            {name}
          </Link>
        </li>
      );
    }}
  />
);

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
          <ul className="navbar-nav">{this.showMenus(menus)}</ul>
        </div>
      </nav>
    );
  }

  showMenus = (menus) =>
    menus.map((menu, index) => (
      <MenuLink to={menu.to} exact={menu.exact} name={menu.name} />
    ));
}

export default Menu;
