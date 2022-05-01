import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./views/App/App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
