import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import "./index.css";
import "@beeq/core/dist/beeq/beeq.esm.js";

const root = document.getElementById("root")!;
root.className = "container";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
