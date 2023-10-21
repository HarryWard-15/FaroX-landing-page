const card = document.querySelector('.card');
const shadow = document.querySelector('.shadow');
const splashPage = document.querySelector('.splash-page');
const faqQuestion = document.querySelectorAll('.question');

faqQuestion.forEach(el => {
    el.addEventListener('click', function() {
        console.log(el.childNodes);
        let answer = el.childNodes[3];
        answer.style.display = 'block';
    })
});

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


spinCard(card);
animateSplash()




