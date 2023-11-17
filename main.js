import './style.css'
import { stopwatch } from './timer'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="timer">0</div>
    <button id="strt">Start</button>
    <button id="stp">Stop</button>
  </div>
`
