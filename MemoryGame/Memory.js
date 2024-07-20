let flipped = false;
let card1, card2;
let cards = document.querySelectorAll('.card');
let interval;
cards = Array.from(cards);

// Function to shuffle array using Fisher-Yates algorithm
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


cards = shuffle(cards);

const game = document.querySelector('.cards');
game.innerHTML = ''; 
cards.forEach(card => game.appendChild(card));

cards.forEach(card => card.addEventListener('click', flip));

function lock() {
    cards.forEach(card => card.removeEventListener('click', flip));
}

function unlock() {
    cards.forEach(card => card.addEventListener('click', flip));
}


let points = 0;
function flip() {

    if (!flipped) {
        card1 = this;
        flipped = true;
        card1.removeEventListener('click', flip);
    } else {
        card2 = this;
        flipped = false;
        lock();

        
        if (card1.dataset.cardname === card2.dataset.cardname && card1.getAttribute('id') !== card2.getAttribute('id')) {
            setTimeout(() => {
                card1.classList.add('fading');
                card2.classList.add('fading');
                 
                 card2.removeEventListener('click', flip);
                 card1.style.cursor = 'default';
                 card2.style.cursor = 'default';
``
                let score= document.querySelector('.score');
                points++
                score.innerText= 'score: ' + points;

                unlock();
                card1 = null;
                card2 = null;
                length-- ;}, 800);
        }

        else {
            setTimeout(() => {
                card1.classList.remove('flipCard');
                card2.classList.remove('flipCard');
                card1 = null;
                card2 = null;
                unlock();
               
            }, 800);
        }
    }

    this.classList.add('flipCard');
    
}
    const lose =document.querySelector('.lose-img')
    const win =document.querySelector('.win-img')
    let timer= document.getElementById('timer');
    function countdown() {
       
        let time=60;
    interval= setInterval(() => {

    let hasWon= cards.every(card => card.classList.contains('fading'));
    
  
    let minutes = parseInt(time/60);
    let seconds = parseInt(time%60);
   
    if ( seconds <10 && minutes ==0){
        seconds = '0' + seconds;
        timer.classList.add('beating');
        timer.style.color = 'red';
    }
    if(minutes<10 && minutes !=0){
        minutes= '0' + minutes;
        seconds = '0' + seconds;
    }
    timer.innerText= minutes +':' + seconds;
    time == 0?  clearInterval(interval) : --time;
    if (time == 0) {
        timer.classList.remove('beating');
       
        lock();
        if(!hasWon){
        lose.style.display='block'
        }
    }
    if(time > 0 && points==8){
        win.style.display='block'
        timer.classList.remove('beating');
        lock();
        time =0;
    }

}, 800)
    }
window.onload= countdown;

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('flipCard', 'fading'));
    points = 0;
    let score = document.querySelector('.score');
    score.innerText = 'score: ' + points;

    flipped = false;
    card1 = null;
    card2 = null;
    unlock();
    shuffle(cards);
    cards.forEach(card => card.addEventListener('click', flip));
    clearInterval(interval)
    lose.style.display='none';
    win.style.display='none';
    timer.style.color = 'rgb(84, 138, 13)'; 
    countdown();
});


