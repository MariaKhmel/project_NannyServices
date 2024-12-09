import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z]/.test(char))
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
