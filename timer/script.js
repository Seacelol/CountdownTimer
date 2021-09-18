 const daysEl = document.getElementById('days');
 const hoursEl = document.getElementById('hours');
 const minsEl = document.getElementById('mins');
 const secondsEl = document.getElementById('seconds');
 
 const newYears = '1 Jan 2022'

 //função que pega o tempo até a data da const "newYears"
 function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    
 }

 //coloca um zero a frente do numero se for menor q 10
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

//chama o contador
 countdown();

 setInterval(countdown, 1000)