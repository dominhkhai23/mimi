
function time() {
    var date = new Date()

    var hours = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()
    if(minute < 10) {
        minute = '0' +  minute
    }

    if(seconds < 10) {
        seconds = '0' +  seconds
    }

    document.querySelector('.content_sale-time-hours').innerText = hours
    document.querySelector('.content_sale-time-minute').innerText = minute
    document.querySelector('.content_sale-time-second').innerText = seconds
  
}

setInterval(time, 1000)



