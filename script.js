'use strict';
let newGame = document.querySelector('.new');
let roll = document.querySelector('.roll');
let score1 = document.querySelector('.score-0');
let score2 = document.querySelector('.score-1');
let currentPlayer1 = document.getElementById('current-0');
let currentPlayer2 = document.getElementById('current-1');
let currentscore1 = document.getElementById('current-0');
let currentscore2 = document.getElementById('current-1');
let player1 = document.querySelector('.player-0');
let player2 = document.querySelector('.player-1');
let image = document.querySelector('.image');

let scores = [0,0];
let currentscore = 0;
let currentPlayer = 0;
let playing = true;
// event listener 
roll.addEventListener('click',function(){
    if(playing){
    let dice = Math.trunc(Math.random()*6)+1;
image.classList.remove('hidden');
image.src = `dice-${dice}.png`;
currentscore = dice;
document.querySelector(`.current--${currentPlayer}`).textContent = currentscore;
scores[currentPlayer] += currentscore;
document.querySelector(`.score-${currentPlayer}`).textContent = scores[currentPlayer];
console.log(scores[currentPlayer]);
currentPlayer = currentPlayer === 0?1:0;
document.querySelector(`.current--${currentPlayer}`).textContent = 0;
player1.classList.toggle('active-player');
player2.classList.toggle('active-player');
if(scores[currentPlayer]>=100){
    document.querySelector(`.player-${currentPlayer}`).classList.add('winner');
    document.querySelector(`.player-${currentPlayer}`).classList.remove('active-player');
    document.querySelector(`.heading-${currentPlayer}`).textContent = 'WON 🎉✨';
    document.querySelector(`.player-${currentPlayer}`).style.color = 'black';
    playing = false;
 }
    }
});

newGame.addEventListener('click',function(){
    score1.textContent = 0;
    score2.textContent = 0;
    currentPlayer1.textContent = 0;
    currentPlayer2.textContent = 0;
    currentPlayer = 0;
    currentscore = 0;
    playing = true;
    scores = [0,0];
    image.classList.add('hidden');

    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player2.classList.remove('active-player');
    player1.classList.add('active-player');
    
    player1.style.color = 'white';
    player2.style.color = 'white';
    document.querySelector(`.heading-0`).textContent =  'SCORE';
    document.querySelector(`.heading-1`).textContent =  'SCORE';


});