let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

const display = document.querySelector(".display h2");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const resumeBtn = document.getElementById("resume");

function updateDisplay() {
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    display.textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resumeTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    hours =  0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);
resumeBtn.addEventListener("click", resumeTimer);

updateDisplay();