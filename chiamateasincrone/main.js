let countdown = document.querySelector('#countdown');
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let resetBtn = document.querySelector('#resetBtn');
let timeRemaining = document.querySelector('#timeRemaining');
let countdownDisplay = document.querySelector('#countdownDisplay');
let counter = 0
let interval = null
let isRunning = false;
function formatTime(n) {
    return `${n}s`
    
}
function startTimer() {
    if(interval) return;
    isRunning = true;

    interval = setInterval(() => {
        if (counter > 0) {
            counter--;
            countdownDisplay.innerText = formatTime(counter);
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}
startBtn.addEventListener('click', function() {
    if (!isRunning && counter === 0) {
        counter = parseInt(countdown.value);
        countdownDisplay.innerText = formatTime(counter);
        startTimer();
    } else if (!isRunning) {
        startTimer();
    }
});
stopBtn.addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
    isRunning = false;
});
resetBtn.addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
    isRunning = false;
    counter = 0;
    countdownDisplay.innerText = formatTime(counter);
});