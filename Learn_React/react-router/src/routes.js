import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/about",
    exact: false,
    component: () => <About />,
  },
  {
    path: "/contact",
    exact: false,
    component: () => <Contact />,
  },
  {
    path: "/products",
    exact: false,
    component: ({ match, location }) => (
      <Products match={match} location={location} />
    ),
  },
  {
    path: "/login",
    exact: false,
    component: ({ location }) => <Login location={location} />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFound />,
  },
];

export default routes;
