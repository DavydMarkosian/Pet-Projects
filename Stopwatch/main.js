let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let milliseconds = document.getElementById('milliseconds')

let btnStart = document.getElementById('btn_start')
let btnStop = document.getElementById('btn_stop')
let btnReset = document.getElementById('btn_reset')

let interval
let mins = 0
let secs = 0
let millisecs = 0


function startTimerFn() {
    millisecs++;
    millisecs <= 9 ? milliseconds.innerText = '0' + millisecs : milliseconds.innerText = millisecs

    if (millisecs >= 99) {
        millisecs = 0
        secs++
        secs <= 9 ? seconds.innerText = '0' + secs : seconds.innerText = secs
        if (secs > 59) {
            secs = '0' + 0
            seconds.innerText = secs
            mins++
            mins <= 9 ? minutes.innerText = '0' + mins : minutes.innerText = mins
        }
    }
}

function stopTimerFn() {
    clearInterval(interval)
}

function resetTimerFn() {
    mins = 0
    secs = 0
    millisecs = 0
    minutes.innerText = '00'
    seconds.innerText = '00'
    milliseconds.innerText = '00'
    stopTimerFn()
}


btnStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimerFn, 10)
})

btnStop.addEventListener('click', () => {
    stopTimerFn()
})

btnReset.addEventListener('click', () => {
    resetTimerFn()
})




























