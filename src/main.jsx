import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

function findOdd(A) {
  const obj ={};
  for(const el of A){
    if(obj[el]){
      obj[el] = obj[el]+=1;
      continue;
    }
     obj[el]=1; 
  }
const values = Object.values(obj);
const oddNumber = values.filter(num=>num%2);
return oddNumber;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
