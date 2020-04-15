const menu = document.querySelector('#drawing2');
const cards = document.querySelectorAll('.card2');
const test = document.querySelector('#rect3727-8');
const test2 = document.querySelector('.cMatrix');

const card1 = cards[0] 
const card2 = cards[1] 
const card3 = cards[2] 
const card4 = cards[3] 

const option1 = document.querySelector('.option-1');
const option2 = document.querySelector('.option-2');
const option3 = document.querySelector('.option-3');



menu.style.position = 'relative';

menu.addEventListener('focus', () => {
    card3.style.transformOrigin = 'bottom';
    card3.style.transform = 'rotate(-25deg)';
    card3.style.transform +=  'translateX(120px)';
    card3.style.transform +=  'translateY(80px)';
    card2.style.transformOrigin = 'bottom';
    card2.style.transform = 'rotate(-50deg)';
    card2.style.transform +=  'translateX(200px)';
    card2.style.transform +=  'translateY(200px)';
    card1.style.transformOrigin = 'bottom';
    card1.style.transform = 'rotate(-75deg)';
    card1.style.transform +=  'translateX(200px)';
    card1.style.transform +=  'translateY(350px)';
});
menu.addEventListener('blur', () => {
    card3.style.transformOrigin = 'bottom';
    card3.style.transform = 'rotate(0deg)';
    card3.style.transform +=  'translateX(0px)';
    card3.style.transform +=  'translateY(0px)';
    card2.style.transformOrigin = 'bottom';
    card2.style.transform = 'rotate(0deg)';
    card2.style.transform +=  'translateX(0px)';
    card2.style.transform +=  'translateY(0px)';
    card1.style.transformOrigin = 'bottom';
    card1.style.transform = 'rotate(0deg)';
    card1.style.transform +=  'translateX(0px)';
    card1.style.transform +=  'translateY(0px)';
});

card3.addEventListener('mouseover', () => {
    card3.style.transformOrigin = 'bottom';
    card3.style.transform = 'rotate(-25deg)';
    card3.style.transform +=  'translateX(-60px)';
    card3.style.transform +=  'translateY(80px)';
    option1.style.display = "block";
    var textWrapper = document.querySelector('.option-1 .option1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
        targets: '.option-1 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 800
    })
    .add({
        targets: '.option-1 .line',
        translateX: [0, document.querySelector('.option-1 .option1').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 800,
        delay: 300
    })
    .add({
        targets: '.option-1 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=775',
        delay: (el, i) => 60 * (i+1)
    });   
});
card3.addEventListener('mouseout', () => {
    card3.style.transformOrigin = 'bottom';
    card3.style.transform = 'rotate(-25deg)';
    card3.style.transform +=  'translateX(120px)';
    card3.style.transform +=  'translateY(80px)';
    option1.style.display = "none";
});
card2.addEventListener('mouseover', () => {
    card2.style.transformOrigin = 'bottom';
    card2.style.transform = 'rotate(-50deg)';
    card2.style.transform +=  'translateX(60px)';
    card2.style.transform +=  'translateY(200px)';
    option2.style.display = "block";
    var textWrapper = document.querySelector('.option-2 .option2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
      targets: '.option-2 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 800
    })
    .add({
      targets: '.option-2 .line',
      translateX: [0, document.querySelector('.option-2 .option2').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 800,
      delay: 300
    }).add({
      targets: '.option-2 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=775',
      delay: (el, i) => 60 * (i+1)  
    });
});
card2.addEventListener('mouseout', () => {
    card2.style.transformOrigin = 'bottom';
    card2.style.transform = 'rotate(-50deg)';
    card2.style.transform +=  'translateX(200px)';
    card2.style.transform +=  'translateY(200px)';
    option2.style.display = "none";
});
card1.addEventListener('mouseover', () => {
    card2.style.transformOrigin = 'bottom';
    card1.style.transform = 'rotate(-75deg)';
    card1.style.transform +=  'translateX(80px)';
    card1.style.transform +=  'translateY(350px)';
    option3.style.display = "block";
    var textWrapper = document.querySelector('.option-3 .option3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
      targets: '.option-3 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 800
    })
    .add({
      targets: '.option-3 .line',
      translateX: [0, document.querySelector('.option-3 .option3').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 800,
      delay: 300
    }).add({
      targets: '.option-3 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=775',
      delay: (el, i) => 60 * (i+1)
    });
});
card1.addEventListener('mouseout', () => {
    card2.style.transformOrigin = 'bottom';
    card1.style.transform = 'rotate(-75deg)';
    card1.style.transform +=  'translateX(200px)';
    card1.style.transform +=  'translateY(350px)';
    option3.style.display = "none";
});

    card3.addEventListener('click',  () => {
 
        window.scrollTo(0,2100);
    });

    card2.addEventListener('click',  () => {
 
        window.scrollTo(0, 4500);
    });

    card1.addEventListener('click',  () => {
 
        window.scrollTo(0,6500);
    });

   
