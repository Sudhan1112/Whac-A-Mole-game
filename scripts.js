const circles = document.querySelectorAll('.circle');
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#time-left');

let score = 0;
let currentTime = 30;
let hitPosition;
let timerId;
let countDownTimer;

const moleEmoji = '🦔';

// Function to choose a random circle
function randomCircle() {
  circles.forEach(circle => circle.textContent = ''); // Clear previous mole

  const randomCircle = circles[Math.floor(Math.random() * circles.length)];
  randomCircle.textContent = moleEmoji; 
  randomCircle.classList.add('mole');
  hitPosition = randomCircle.id;

  setTimeout(() => randomCircle.classList.remove('mole'), 800); // Remove mole class after timeout
}

// Function to track score
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    if (circle.id === hitPosition) {
      score++;
      scoreDisplay.textContent = score;
      hitPosition = null; // Reset hit position
    }
  });
});

// Move mole every second
function moveMole() {
  timerId = setInterval(randomCircle, 1000);
}

// Countdown timer
function countDown() {
  currentTime--;
  timeLeftDisplay.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(countDownTimer);
    alert(`Game Over! Your score is ${score}`);
  }
}

// Start the game
function startGame() {
  score = 0;
  currentTime = 30;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = currentTime;
  moveMole();
  countDownTimer = setInterval(countDown, 1000);

  // Disable Start Button
  document.querySelector('.start-btn').disabled = true;
}

// Restart the game
function restartGame() {
  clearInterval(timerId);
  clearInterval(countDownTimer);
  score = 0;
  currentTime = 30;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = currentTime;

  // Enable Start Button
  document.querySelector('.start-btn').disabled = false;
}
