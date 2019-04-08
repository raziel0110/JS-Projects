const dom_time = document.getElementById("display-time");

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimer(seconds);
  const interval = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(interval);
      return;
    }
    displayTimer(secondLeft);
  }, 1000);
}

function displayTimer(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const display = `${min}:${sec < 10 ? "0" : ""}${sec}`;
  dom_time.innerHTML = display;
}

timer(300);
