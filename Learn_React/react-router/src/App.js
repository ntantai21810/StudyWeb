import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />

          {/* Content */}

          <Switch>
            {Routes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
