import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

function towerBuilder(nFloors) {
const tower = [];
if(nFloors<1){
  return;
}
for(let i=1; i<=nFloors;i+=1){
let stars = '';
let spaces = '';

for(let j = 0 ; j < i*2-1; j+=1){
  stars+='*';
}


for(let k = 0; k<nFloors-1; k+=1){
  spaces+='';
}
tower.push(spaces,stars,spaces)
}
return tower;
  }

  console.log(towerBuilder(2))


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
