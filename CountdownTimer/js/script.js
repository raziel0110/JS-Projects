let setup = function setup(time) {
  time = time * 60;
  const interval = setInterval(() => {
    time--;
    let t = updateTime(time);
    console.log(t);
    if (time <= 0) {
      stopClock(interval);
    }
  }, 1000);
};

setup(1);
function updateTime(t) {
  let min = Math.floor(t / 60);
  let sec = t % 60;
  console.log(min);
  console.log(sec);
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min} : ${sec}`;
}

function stopClock(interval) {
  alert(`Time's up!`);
  clearInterval(interval);
}

// export { setup, updateTime };
