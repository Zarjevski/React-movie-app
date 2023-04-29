import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ModalProvider from "./context/ModalProvider";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
