import './style.css'
import { stopwatch,stop } from './timer'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="timer">0</div>
    <button id="strt">Start</button>
    <button id="stp">Stop</button>
  </div>
`
let flag = false;

document.getElementById("strt").addEventListener('click', () => stopwatch(flag));
document.getElementById("stp").addEventListener('click', () => stop(flag));