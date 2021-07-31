//put timer things here
//set a variable for timer input
var minutesCount = 0;
var secondsCount = 0;
/** boolean for start/stop a timer */
var timerToggle = false;

/** Clear the timer input */
function clearInput() {
    minutesCount = 0;
    secondsCount = 0;
    ToggleTimer(false);
    return { minutesCount, secondsCount };
}
/** when the time is up you need to alert the user right? Rickroll them! */
function AlarmUser() {
    window.location.href = "https://%79%6F%75%74%75%2E%62%65/oHg5SJYRHA0";
}
//add interactivity to timerToggle
/** Start/stop the timer */
function startstopTimer() {
    let processedTime = minutesCount * 60 + secondsCount;
    if (processedTime != 0) {
        ToggleTimer(true, processedTime);
    }
    else {
        ToggleTimer(false);
    }
}
/**
 * Toggle the timer
 * @param {boolean} state - The state you wanna toggle! true = start the timer, false = pause the timer
 * @param {number} [data] - The data you wanna pass with
 * 
 */
function ToggleTimer(state, data) {
        if (state === false) {
            timerToggle = false;
            displayToggle();
        }
        else if (state === true) {
            timerToggle = true;
            displayToggle();
            return console.log(data);
        }
}
//extract to a function because yes
function displayToggle() {
    document.getElementById("ToggleTimer").innerHTML = timerToggle ? "Stop" : "Start";
}
//ok let's do some graphics stuff
/** ตัวแปร lololol */
var timerView = document.getElementById("timer");
