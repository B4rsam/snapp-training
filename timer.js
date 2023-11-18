let flag = false;
let time = {
  min: "00",
  sec: "00",
  mil: "00"
}

export function stopwatch(event) {
  console.log(event);
  document.getElementById("timer").innerHTML = time.min + ":" + time.sec + ":" + time.mil;
  if (flag === false)
  {
    time.mil++;
    if (time.mil == 100)
    {
      time.mil = 0;
      time.sec++;
    }
    if (time.sec == 60)
    {
      time.sec = 0;
      time.min++;
    }
    setTimeout(stopwatch,10);
  }
}

export function reset(event) {
  console.log(event);
  time.min = time.sec = time.mil = "00";
}

export function stop(event) {
  flag = !flag;
}