import React from "react";
import ReactDOM from "react-dom/client";
import App from "./06-sidebar-modal/App";
import { AppProvider } from "./06-sidebar-modal/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
