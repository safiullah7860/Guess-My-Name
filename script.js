'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  //^if user clicks the element 'check'
  const guess = Number(document.querySelector('.guess').value);
  // this is basically a function
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  if (guess) {
    if (guess == number) {
      //^when player wins (guesses the right number)
      document.querySelector('.message').textContent =
        'Correct number!!! Congrats';
      document.body.style.background = '#228B22';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.number').textContent = number;
    } else if (guess < number) {
      if (score > 0) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.body.style.background = '#B22222'; //change the backgrund color^
        document.querySelector('.message').textContent = 'You lost the game';
      }
    } else if (guess > number) {
      if (guess > 1) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.body.style.background = '#B22222';
        document.querySelector('.message').textContent = 'You lost the game';
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  //number = Math.trunc(Math.random() * 20) + 1;
  document.body.style.background = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
