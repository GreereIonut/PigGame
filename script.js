'use strict';
//selecting the score elements
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const diceBtnNew = document.querySelector('.btn--new');
const diceBtnRoll = document.querySelector('.btn--roll');
const diceBtnHold = document.querySelector('.btn--hold');
const currentScoreEl0 = document.getElementById('current--0');
const currentScoreEl1 = document.getElementById('current--1');

const scores = [0, 0];

let activePlayer = 0;

scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

diceElement.classList.add('hidden');

let currentScore = 0;
const swapPlayers = function () {
  currentScore = 0; //the score becomes 0
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore; //the actual element is reset,starting again from 0
  activePlayer = activePlayer === 0 ? 1 : 0; // Swapping the players
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};
//Random number for the dice
let diceValue = Math.trunc(Math.random() * 6) + 1;

const btnRollClick = function () {
  //generate random number
  diceValue = Math.trunc(Math.random() * 6) + 1;
  //display de dice on the screen
  diceElement.classList.remove('hidden');
  //changing the source of the image in line with the random number that we rolled
  diceElement.src = `dice-${diceValue}.png`;
  //check for roll 1
  if (diceValue !== 1) {
    //#1the value adds to the current player score
    currentScore += diceValue;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    //  currentScoreEl0.textContent = currentScore;
    //#2roll again
  } else {
    swapPlayers();
  }
};

const holdBtnFunction = function () {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  swapPlayers();
};

diceBtnRoll.addEventListener('click', btnRollClick);

diceBtnHold.addEventListener('click', holdBtnFunction);
