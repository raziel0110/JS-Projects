const dom_time = document.getElementById("display-time");
const end_time = document.getElementById("end-time");
const current_time = document.getElementById("date");
const input_time = document.getElementById("input-time");
const start = document.getElementById("start");
let interval;

// start.addEventListener("click", function() {
//   let time_string = input_time.value;
//   let t = time_string.toString().split(":");
//   const setHour = parseInt(t[0]);
//   const setMin = parseInt(t[1]);
//   const date = new Date();
//   const cur_h = date.getHours();
//   const cur_m = date.getMinutes();
//   let diff_h = setHour - cur_h * 3600;
//   if (setHour < cur_h) diff_h = 24 - cur_h + setHour * 3600;
//   let diff_m = setMin - cur_m * 60;
//   if (setMin < cur_m) {
//     diff_m = 60 - cur_m * 60;
//   }
//   const totalDiff = diff_h + diff_m;
//   //   const diff_m = (setMin - cur_m) * 60;
//   //   let totalDiff = diff_h + diff_m;

//   //   console.log(totalDiff);
//   setup(totalDiff);
// });

function setup(time) {
  clearInterval(interval);
  let now = Date.now();
  let then = now + time * 1000;
  displayTimeLeft(time);
  displayEndTime(then);
  interval = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    displayActualTime();
    if (secondsLeft < 0) {
      clearInterval(interval);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  const minutesRemaining = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const display = `${hours}:${
    minutesRemaining < 10 ? "0" : ""
  }${minutesRemaining}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  dom_time.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();

  end_time.textContent = `Be back at ${hour}:${min < 10 ? "0" : ""}`;
}

function displayActualTime() {
  const time = new Date();
  const hour = time.getHours();

  const min = time.getMinutes();
  const sec = time.getSeconds();

  const display_currentTime = `${hour}:${min < 10 ? "0" : ""}${min}:${
    sec < 10 ? "0" : ""
  }${sec}`;

  current_time.innerHTML = display_currentTime;
}

setup(300);
