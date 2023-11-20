import './style.css'
import {getList} from './api.js'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="listButton">See List</button>
  </div>
`

document.getElementById("listButton").addEventListener('click',getList);