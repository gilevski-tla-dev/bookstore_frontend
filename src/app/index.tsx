import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import { Provider } from "react-redux";
import { store } from "../entites/redux/store";

const reactRoot = createRoot(document.getElementById("root")!);

reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
