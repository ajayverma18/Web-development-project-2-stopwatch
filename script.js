
let timer;
let isRunning = false;
let ms = 0, sec = 0, min = 0;

function updateDisplay() {
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let milli = ms < 10 ? "0" + ms : ms;
  document.getElementById("display").textContent = `${m}:${s}:${milli}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      ms++;
      if (ms >= 100) { ms = 0; sec++; }
      if (sec >= 60) { sec = 0; min++; }
      updateDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  ms = sec = min = 0;
  updateDisplay();
}

updateDisplay();
