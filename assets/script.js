const card = document.querySelector('.card');
const shadow = document.querySelector('.shadow');
const splashPage = document.querySelector('.splash-page');
const bannerTimer = document.querySelector('.remaining-time-banner');
const positionBanner = document.querySelector('.queue');
const signupForm = document.querySelector('.signup-form');
const signupForm2 = document.querySelector('.signup-form-2');



var countDownDate = new Date("Dec 1, 2023 00:00:00").getTime();

function animateSplash() {
    setTimeout(() => {splashPage.style.opacity = '0'},3000);
    setTimeout(() => {splashPage.style.display = 'none'},4000);
}

function spinCard(card) {
    let calc = 0;
    let height = -50;
    setInterval(() => {
        if (calc == 360) calc = 0;
        if (calc < 180) height += 0.5;
        else height -= 0.5;

        card.style.transform = `rotateY(${calc}deg) translateY(${height}px)`;
        shadow.style.transform = `translateY(${-height}px) rotateX(90deg) translate3d(-80px, 0,-550px)`;
        calc += 2;
    },16);
}
var timer = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let timeString = `${days}:${hours}:${minutes}:${seconds}s`;

    bannerTimer.innerHTML = timeString;
},1000);

function insertPosition () {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let timeLeftReduced = Math.floor(timeLeft / 1000);

    let numPeople = 2000 - (timeLeftReduced / 1476);
    let numPeopleRounded = Math.floor(numPeople);

    positionBanner.innerHTML = numPeopleRounded;
    signupForm.setAttribute('data-join-state-input.lastname-value', numPeopleRounded);
    signupForm2.setAttribute('data-join-state-input.lastname-value', numPeopleRounded);
};

insertPosition();
spinCard(card);
animateSplash();




