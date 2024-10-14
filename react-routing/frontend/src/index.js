import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([{ path: "/", element: <h1>Home page</h1> }]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
