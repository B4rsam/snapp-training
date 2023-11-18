let interval,date;

export function stopwatch(event) {
  console.log(event);
  interval = setInterval(() => {
    date = new Date();
    document.getElementById("timer").innerHTML = "00" + ":" + date.getSeconds() + ":" + date.getMilliseconds();
  }, 10)
}

export function stop(event) {
  console.log(event);
  document.getElementById("timer").innerHTML = "00:00:000";
  clearInterval(interval);
}