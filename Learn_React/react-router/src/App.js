import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
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
                <MenuLink label="Home" to="/" exact={true} />
                <MenuLink label="About" to="/about" exact={false} />
                <MenuLink label="Contact" to="/contact" exact={false} />
              </ul>
            </div>
          </nav>

          {/* Content */}

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
