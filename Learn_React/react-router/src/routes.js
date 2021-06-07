import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

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
    component: ({ match }) => <Products match={match} />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFound />,
  },
];

export default routes;
