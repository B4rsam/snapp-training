import './style.css'
import { stopwatch,stop } from './timer'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="timer"></div>
    <button id="strt">Start</button>
    <button id="stp">Stop</button>
  </div>
`
let flag = false;
let time = {
  mil: 0,
  sec: 0,
  min: 0,
}


document.getElementById("strt").addEventListener('click', () => stopwatch(flag));
document.getElementById("stp").addEventListener('click', () => stop(flag));

document.getElementById("timer").innerHTML = time.min + ":" + time.sec + ":" + time.mil;