import { FunctionComponent } from "react";
import "./app.scss";

import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
