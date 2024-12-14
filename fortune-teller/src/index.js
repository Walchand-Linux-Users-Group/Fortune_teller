import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18+
import "./index.css";
import App from "./App";

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
