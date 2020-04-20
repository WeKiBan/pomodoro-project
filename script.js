let studyDuration;
let shortBreakDuration;
let longBreakDuration;
let timerType = "study"
let shortBreakCount = 0;
let longBreakCount = 0;
let studyCount = 0;
setBreakDurations();
let remainingTime = studyDuration * 60;
let timerStatus = 'stopped'
let timerSel = document.getElementById('timer');
let arrowSel = document.getElementsByClassName('arrows')
let timerLabel = document.getElementById('timer-label')
let durationsNumInputs = document.getElementsByClassName('durations')
let body = document.body;
updateTimerDisplay();
let startTimer;
let loops = 0;
const numInputs = document.querySelectorAll('input[type=number]')




/* controls timer durations */

Array.from(arrowSel).forEach(arrow => {
    arrow.addEventListener('click', function (e) {
        if (timerStatus === 'running' || timerStatus === 'paused') return; /* to stop buttons being active when timer is running */
        if (e.target.classList.contains('fa-chevron-down')) {
            e.target.nextElementSibling.stepDown()
        } else {
            e.target.previousElementSibling.stepUp()
        }
        setBreakDurations();
        remainingTime = studyDuration * 60;
        updateTimerDisplay();
    })
});

Array.from(durationsNumInputs).forEach(item => {
    item.addEventListener('input', function (e) {
        if (timerStatus === 'running' || timerStatus === 'paused') return;
        setBreakDurations();
        remainingTime = studyDuration * 60;
        updateTimerDisplay();
    })
});

numInputs.forEach(function (input) {    
    input.addEventListener('change', function (e) {
        if (e.target.value == '') {
            e.target.value = 1
            setBreakDurations();
            remainingTime = studyDuration * 60;
            updateTimerDisplay();
        }
    })
})

function disableInputs() {
    Array.from(numInputs).forEach(function (input){
        input.setAttribute('disabled', true); 
    })
}

function enableInputs() {
    Array.from(numInputs).forEach(function (input){
        input.removeAttribute('disabled'); 
    })
}



/* code for buttons */

document.getElementById('start-btn').addEventListener('click', function () {
    if (timerStatus === 'running') return;
    setBreakDurations();
    changeTimerLabelText();
    disableInputs();
    startTimer = setInterval(timer, 1000);
})


document.getElementById('pause-btn').addEventListener('click', function () {
    if (timerStatus === "stopped") return;
    timerStatus = "paused";
    clearInterval(startTimer)
})


document.getElementById('stop-btn').addEventListener('click', function () {
    timerStatus = "stopped";
    clearInterval(startTimer)
    setBreakDurations()
    remainingTime = studyDuration * 60;
    timerType = 'study'
    loops = 0;
    updateTimerDisplay();
    timerLabel.textContent = "Let's study!";
    body.style.color = '#FC814A';
    body.style.backgroundColor = '#395E66';
    enableInputs();
})

function setBreakDurations() {
    studyDuration = parseInt(document.getElementById('study-duration').value);
    shortBreakDuration = parseInt(document.getElementById('short-break-duration').value);
    longBreakDuration = parseInt(document.getElementById("long-break-duration").value);
}

function updateTimerDisplay() {
    let now = new Date().getTime();
    let endTime = now - (remainingTime);
    var hours = Math.floor(remainingTime / 3600);
    var minutes = Math.floor((remainingTime % 3600) / 60);
    var seconds = Math.floor((remainingTime % 3600) % 60);
    var timeConvertedDisplay = (hours) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    if (!studyDuration) {
        minutes = '00';
        seconds = '00';
    }
    if (!hours) {
        return timerSel.textContent = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
    return timerSel.textContent = timeConvertedDisplay;
}


/* timer */

function timer() {
    if (remainingTime === 0 && loops < 6) {
        loops++;
        switch (timerType) {
            case 'study':
                timerType = 'short break'
                remainingTime = shortBreakDuration * 60;
                studyCount++;
                console.log("study-count:", studyCount)
                break;
            case 'short break':
                timerType = 'study'
                remainingTime = studyDuration * 60;
                shortBreakCount++;
                console.log("short-break-count:", shortBreakCount)
                break;
            case 'long break':  
                timerType = 'study'
                remainingTime = studyDuration * 60;
                longBreakCount++;
                console.log("long-break-count:", longBreakCount);
                break;
        }
    } else if (remainingTime === 0) {
        timerType = 'long break'
        loops = 0;
        remainingTime = longBreakDuration * 60;
    };

    timerStatus = 'running'
    changeTimerLabelText();
    updateTimerDisplay();
    remainingTime--;
}

function changeTimerLabelText() {
    switch (timerType) {
        case 'study':
            body.style.color = '#00916E'
            body.style.backgroundColor = '#FC814A'
            break;
        case 'short break':
            body.style.color = '#00916E'
            body.style.backgroundColor = '#FFCF00'
            break;
        case 'long break':
            body.style.color = '#00916E'
            body.style.backgroundColor = '#395E66'
            break;
    }
    timerLabel.textContent = timerType;
}




