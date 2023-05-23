
let hour = document.querySelector('.h')
let min = document.querySelector('.m')
let s = document.querySelector('.s')

let date = document.querySelector('.time')

setInterval(fn, 1000)
function fn() {
    let nowtime = new Date()

    let hr = nowtime.getHours()
    // console.log(hr);

    let m = nowtime.getMinutes()

    let ss = nowtime.getSeconds()

    hr = hr < 10 ? '0' + hr : hr
    m = m < 10 ? '0' + m : m
    ss = ss < 10 ? '0' + ss : ss


    date.innerHTML = `${hr}:${m}:${ss}`
}