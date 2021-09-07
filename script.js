'use strict';
// console.log(document.querySelector('.message').
// textContent);
let score = 20;
let highscore = 0;
let secrectNumber = Math.floor(Math.random() * 21);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '💔 No Number';
  } else if (guess === secrectNumber) {
    document.querySelector('.message').textContent = ' 🎆🎈You Won ';
    document.querySelector('.number').textContent = secrectNumber;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    // highscore = document.querySelector('.highscore').value;
    // document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guess !== secrectNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secrectNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = '0';
    }
    
  }
  //  else if (guess < secrectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // } else if (guess > secrectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secrectNumber = Math.round(Math.random() * 21);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
