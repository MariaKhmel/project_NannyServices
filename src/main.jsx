// import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") {
    const arr = iterable.split("");
    return arr.filter((char, i, arr) => char !== arr[i + 1]);
  } else if (typeof iterable === "object") {
    return iterable.filter((char, i, arr) => char !== arr[i + 1]);
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
