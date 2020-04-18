let studyDuration = 25;
var timerStatus = 'paused'
var timerSel = document.getElementById('timer');

/* controls study duration */

let studyDurationSel = document.getElementById('study-duration')
let increaseStudyDuration = document.getElementById('study-duration-up')
let decreaseStudyDuration = document.getElementById('study-duration-down')

studyDurationSel.textContent = studyDuration;

increaseStudyDuration.addEventListener('click', function (e) {
    if (studyDuration === 100 || timerStatus === 'running') return;
    studyDuration++;
    studyDurationSel.textContent = studyDuration;
    setTimer();
})

decreaseStudyDuration.addEventListener('click', function (e) {
    if (studyDuration === 1 || timerStatus === 'running') return;
    studyDuration--;
    studyDurationSel.textContent = studyDuration;
    setTimer();
})

/* controls short break duration */

let shortBreak = 5;
let shortBreakSel = document.getElementById('short-break-duration')
let increaseShortBreak = document.getElementById('short-break-duration-up')
let decreaseShortBreak = document.getElementById('short-break-duration-down')

shortBreakSel.textContent = shortBreak;

increaseShortBreak.addEventListener('click', function (e) {
    if (shortBreak === 100 || timerStatus === 'running') return;
    shortBreak++;
    shortBreakSel.textContent = shortBreak;
    
})

decreaseShortBreak.addEventListener('click', function (e) {
    if (shortBreak === 1 || timerStatus === 'running') return;
    shortBreak--;
    shortBreakSel.textContent = shortBreak;
   
})


/* controls long break duration */

let longBreak = 30;
let longBreakSel = document.getElementById('long-break-duration')
let increaseLongBreak = document.getElementById('long-break-duration-up')
let decreaseLongBreak = document.getElementById('long-break-duration-down')

longBreakSel.textContent = longBreak;

increaseLongBreak.addEventListener('click', function (e) {
    if (longBreak === 100 || timerStatus === 'running') return;
    longBreak++;
    longBreakSel.textContent = longBreak;
})

decreaseLongBreak.addEventListener('click', function (e) {
    if (longBreak === 1 || timerStatus === 'running') return;
    longBreak--;
    longBreakSel.textContent = longBreak;
})



/* changes timer */

function setTimer(){
    let now = new Date().getTime();
    let remainingTime = studyDuration * 60;
    let endTime = now - remainingTime;
    var hours = Math.floor(remainingTime / 3600);
    var minutes = Math.floor((remainingTime % 3600) / 60);
    var seconds = Math.floor((remainingTime % 3600) % 60);
    var timeConvertedDisplay =("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    timer.textContent = timeConvertedDisplay;
}


setTimer();





/* let endTime;
let remainingTime = 30 * 60;
let hours = Math.floor(remainingTime / 3600);
let mins = Math.floor(remainingTime / 60);
let sec = remainingTime % 60;
let display = remainingTimeHours + ':' + remainingTimeMins + ":" + remainingTimeSec;

var timer = setInterval(function() {

    let now = newDate().getTime();
    let t = endTime - now;

    if (t >= 0) {

        let hours = Math.floor(remainingTime / 3600);
        let mins = Math.floor(remainingTime / 60);
        let sec = remainingTime % 60;


    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";

    }


}, 1000); */

