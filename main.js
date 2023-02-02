
let timerDown = new Date("Aug 1, 2023 23:59:59").getTime();

let counter = setInterval(() => {

    // current date
    let dateNow = new Date().getTime();
    
    // time between Dates
    let btween = timerDown - dateNow;

    // get date days
    let days =  Math.floor(btween / (1000 * 60 * 60 * 24));

    // get date hours
    let hours =  Math.floor((btween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // get date minutes
    let minutes = Math.floor((btween % (1000 * 60 * 60)) / (1000 * 60));

    // get date second
    let seconds = Math.floor((btween % (1000 * 60)) / (1000));

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;


    if(btween <= 0) {
        clearInterval(counter);
    }
    

    
}, 1000)









