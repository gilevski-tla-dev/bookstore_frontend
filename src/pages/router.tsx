import { Routes, Route } from "react-router-dom";

import { RouteType } from "../types/router.types";
import Home from "./Home";
import Login from "../features/Login";

const routeConfig: RouteType[] = [
  { title: "Home", path: "/home", element: <Home /> },
  { title: "Login", path: "/login", element: <Login /> },
  // add other routes here
];

const Router = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
