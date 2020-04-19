console.log('connected')
var secondHand = document.querySelector('.second-hand')
var minuteHand = document.querySelector('.min-hand')    
var hourHand = document.querySelector('.hour-hand')    
var time1 = document.querySelector('.current-time')    


var setSeconds =() =>{
    var time2 = new Date().getHours()
    var time3 = new Date().getMinutes()
    time1.textContent = '';
    time1.textContent = `${time2}:${time3}`
    time1.style.fontSize = `4rem`
    time1.style.borderBottom = `1px dashed black`

    var now = new Date();
    var seconds = now.getSeconds();
    var secDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    console.log(seconds);
    //minutes-------------------------------------------------
    var minutes = now.getMinutes();
    console.log(minutes);
    var minDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    //hour----------------------------------------------------
    var hours = now.getHours();
    console.log(`${hours}--------------`);
    var hourDegree = (( hours / 60 )  * 360 ) + 90
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    
}


setInterval(() => {
    setSeconds()
}, 1000);

