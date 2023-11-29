import "./style.css";
import { getList } from "./api.js";
const name = 'See list';
document.querySelector("#app").innerHTML = `
  <div>
    <button id="listButton">${name}</button>
    <div id="cardArea"></div>
  </div>
`;

document.getElementById("listButton").addEventListener("click", getList);
