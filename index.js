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
    tmr.minutesCount = 0;
    tmr.secondsCount = 0;
    ToggleTimer(false);
}
/** when the time is up you need to alert the user right? Rickroll them! */
function AlarmUser() {
    window.location.href = "https://%79%6F%75%74%75%2E%62%65/oHg5SJYRHA0";
}
//add interactivity to timerToggle
/** Start/pause the timer */
function startstopTimer() {
    var processedTime = tmr.minutesCount * 60 + tmr.secondsCount;
    if (processedTime !== 0 && tmr.toggleState === false) {
        ToggleTimer(true, processedTime);
    }
    else if (processedTime !== 0) {
        ToggleTimer(false);
    }
    else {
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
        tmr.toggleState = false;
        displayToggle();
    }
    else if (state === true) {
        tmr.toggleState = true;
        displayToggle();
        return data;
    }
    else {
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
