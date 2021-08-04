//put timer things here
var Timer = /** @class */ (function () {
    function Timer() {
        this.minutesCount = 0;
        this.secondsCount = 0;
        this.toggleState = false;
    }
    return Timer;
}());
var tmr = new Timer();
/** Clear the timer input */
function clearInput() {
    clearInterval(timerInterval);
    tmr.minutesCount = 0;
    tmr.secondsCount = 0;
    tmr.toggleState = false;
    displayToggle();
    updateTimerView(0);
}
/** when the time is up you need to alert the user right? Rickroll them! */
function AlarmUser() {
    window.location.href = "https://bit.ly/3rTz1Jd";
}
//add interactivity to timerToggle
/** Start/pause/stop the timer */
function startstopTimer() {
    var processedTime = tmr.minutesCount * 60 + tmr.secondsCount;
    if (processedTime !== 0 && tmr.toggleState === false) {
        ToggleTimer(true, processedTime);
    }
    else if (processedTime !== 0) {
        clearInterval(timerInterval);
        ToggleTimer(false);
    }
    else {
        clearInterval(timerInterval);
        ToggleTimer(false);
    }
}
/**
 * Toggle the timer
 * @param {boolean=} state - The state you wanna toggle! true = start the timer, false = pause the timer
 * @param {number=} data - The data you wanna pass with
 *
 */
function ToggleTimer(state, data) {
    if (state === false) {
        clearInterval(timerInterval);
        tmr.toggleState = false;
        displayToggle();
    }
    else if (state === true) {
        tmr.toggleState = true;
        timeLeft = data;
        displayToggle();
        updateTimerView(data);
        literallyStartTimer(data);
    }
    else {
        clearInterval(timerInterval);
        !tmr.toggleState;
        displayToggle();
    }
}
//extract to a function because yes
function displayToggle() {
    document.getElementById("ToggleTimer").innerHTML = tmr.toggleState ? "Stop" : "Start";
}
//ok let's do some graphics stuff
/** ตัวแปร lololol */
var timerView = document.getElementById("timer");
function updateTimerView(time) {
    var displayMinutes = Math.floor(time / 60).toString();
    var displaySeconds = (time % 60).toString();
    if (+displayMinutes < 10) {
        displayMinutes = '0' + displayMinutes;
    }
    if (+displaySeconds < 10) {
        displaySeconds = '0' + displaySeconds;
    }
    timerView.innerHTML = displayMinutes + "Min" + " : " + displaySeconds + "Sec";
}
//the core thing goes here
//var for timerInterval pls don't exploit the code
var timerInterval = null;
var timePassed = 0;
var timeLeft;
function literallyStartTimer(time) {
    timerInterval = setInterval(function () {
        timePassed = timePassed += 1;
        timeLeft = time - timePassed;
        updateTimerView(timeLeft);
        if (timeLeft == 0) {
            startstopTimer();
            AlarmUser();
        }
    }, 1000);
}
