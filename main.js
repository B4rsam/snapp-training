import './style.css'
import {getList} from './api.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="bigBox" style="background-color: white;"></div>
    <button id="listButton">See List</button>
  </div>
`

document.getElementById("listButton").addEventListener('click',getList);