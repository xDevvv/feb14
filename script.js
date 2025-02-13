const mainDiv = document.querySelector('.main');
const introContent = document.querySelector('.intro-content');
const dateContent = document.querySelector('.date-content');
const imagesContent = document.querySelector('.images-content');
const message = document.querySelector('.message');
const userInput = document.getElementById('user-input');
const btnContainer = document.querySelector('.btn-container');    
const btnList = btnContainer.querySelectorAll("button");
const sendBtn = document.querySelector('.send');
const showMemories = document.querySelector('.our-memories');
const showMyMessage = document.querySelector('.my-message');
const backBtnToMemories = document.querySelector('.back-btn-memories');
const backBtnToDate = document.querySelector('.back-btn-date');


btnList.forEach((element) => {
    element.addEventListener('click', () => {
        userInput.value += element.id;
    })
})

sendBtn.addEventListener('click', () => {
    if(userInput.value == 122517) {
        
        introContent.style.display = "none";
        dateContent.style.display = "block";
    }
    else {
        userInput.value = '';
    }
})

showMemories.addEventListener('click', () => {
    dateContent.style.display = "none";
    imagesContent.style.display = "block";
})

showMyMessage.addEventListener('click', () => {
    imagesContent.style.display = "none";
    message.style.display = "block"
})

backBtnToMemories.addEventListener('click', () => {
    message.style.display = "none";
    imagesContent.style.display = "block";
})

backBtnToDate.addEventListener('click', () => {
    dateContent.style.display = "block";
    imagesContent.style.display = "none";
})

    let start = new Date('2017-12-25T16:00:00');
    let now = new Date();

    // Calculate total difference
    let totalMilliseconds = now - start;
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let totalDays = Math.floor(totalHours / 24);

    // Calculate years and months
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
        months--;
        let lastMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    
    let yrsTxt = (years > 1) ? 'YEARS' : 'YEAR'; 
    let monthsTxt = (months > 1) ? 'MONTHS' : 'MONTH';

    document.getElementById("yrs-months").innerText = `${years} ${yrsTxt} ${months} ${monthsTxt}`;
    document.getElementById("days").innerText = `${totalDays}`;
    document.getElementById("dys-label").innerText = (days > 0) ? 'DAYS' : 'DAY';

    function updateTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();


        document.getElementById("hours").innerText = `${String(hours).padStart(2, '0')}`;
        document.getElementById("hrs-label").innerText = (hours > 1) ? 'HOURS' : 'HOUR';
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("mins-label").innerText = (minutes > 1) ? 'MINS' : 'MIN';
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        document.getElementById("secs-label").innerText = (seconds > 1) ? 'SECS' : 'SEC';
    }

    setInterval(updateTime, 1000);





