const section = document.querySelector('.card-showcase');
const card = document.querySelector('.card');
const shadow = document.querySelector('.shadow');
const body = document.querySelector('body');

let calc = 0;
let height = -50;

function spinCard(card) {
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



