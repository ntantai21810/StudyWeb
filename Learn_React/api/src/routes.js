import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: "",
    exact: false,
    component: () => <NotFoundPage />,
  },
];

export default routes;
