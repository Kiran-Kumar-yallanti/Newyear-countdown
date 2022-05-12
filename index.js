const newYear = "1 jan 2023";


function countDown() {
   
    const currentDate = new Date;
    const newYearDate = new Date(newYear);
    const countDownTime = newYearDate - currentDate;


    const totalSeconds = countDownTime / 1000;
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60)  % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

countDown();

setInterval(countDown,1000);

