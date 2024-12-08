import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

function toCamelCase(str) {
  if (str.includes("_") || str.includes("-")) {
    const upperCaseArr = str.split("_").map((word, i, arr) => {
      if (arr[0][0] === arr[0][0].toUpperCase()) {
        const firstLetter = word[0].toUpperCase();
        const restOfTheWord = arr[i].slice(1);
        return [...firstLetter, ...restOfTheWord].join("");
      } else {
        const firstWord = arr[0];
        const restWords = [];
        if (arr[i] !== firstWord) {
          const firstLetter = word[0].toUpperCase();
          const restOfTheWord = arr[i].slice(1);
          restWords.push([...firstLetter, ...restOfTheWord].join(""));
        }
        return [...firstWord, ...restWords].join("");
      }
    });
    return upperCaseArr.join("");
  }
}

console.log(toCamelCase("the_stealth_warrior"));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
