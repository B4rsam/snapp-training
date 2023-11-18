import './style.css'
import { stopwatch,reset,stop } from './timer'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="timer">00:00:000</div>
    <button id="strt">Start</button>
    <button id="stp">Stop</button>
    <button id="rst">Reset</button>
  </div>
`
let flag = false;

document.getElementById("strt").addEventListener('click', stopwatch);
document.getElementById("rst").addEventListener('click', reset);
document.getElementById("stp").addEventListener('click', stop);