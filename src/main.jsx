import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

function isTriangle(a, b, c) {
  // Check if all sides are positive
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  // Check the triangle inequality theorem
  return a + b > c && b + c > a && a + c > b;
}

console.log(isTriangle(2,6,7))


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
