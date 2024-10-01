let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10); // Update every 10ms
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  lapCount = 0;
  document.getElementById('display').textContent = "00:00:00.00";
  document.getElementById('lapsList').innerHTML = '';
}

function recordLap() {
  lapCount++;
  const lapTime = document.getElementById('display').textContent;
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
  document.getElementById('lapsList').appendChild(lapItem);
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;

  const time = new Date(elapsedTime);
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 10);

  document.getElementById('display').textContent = 
    `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 2)}`;
}

function pad(number, digits = 2) {
  return number.toString().padStart(digits, '0');
}
