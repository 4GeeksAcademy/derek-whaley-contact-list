import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";
import AppProvider from "./store";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
