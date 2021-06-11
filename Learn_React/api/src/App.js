import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navbar */}
          <Menu />
          {/* <button className="btn btn-primary mt-3">Add product</button> */}
          {/* Products */}
          {/* <ProductList /> */}
          {this.showContent(routes)}
        </div>
      </Router>
    );
  }

  showContent = (routes) => {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  };
}

export default App;
