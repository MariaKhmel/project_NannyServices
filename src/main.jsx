import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
};

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
