import React from "react";
import ReactDOM from "react-dom/client";
import App from "./08-cart/App";
import { AppProvider } from "./08-cart/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
