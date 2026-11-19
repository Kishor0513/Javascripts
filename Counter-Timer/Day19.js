var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');

var startTimer = null;

start.addEventListener('click', function () {
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function () {
    h.value = 0;
    m.value = 0;
    s.value = 0;

    stopInterval()
})

function timer() {
    let hours = Number(h.value);
    let minutes = Number(m.value);
    let seconds = Number(s.value);

    if (hours === 0 && minutes === 0 && seconds === 0) {
        return;
    }

    if (seconds !== 0) {
        s.value = seconds - 1;
    } else if (minutes !== 0) {
        s.value = 59;
        m.value = minutes - 1;
    } else if (hours !== 0) {
        m.value = 59;
        h.value = hours - 1;
    }
}

function stopInterval() {
    clearInterval(startTimer);
}