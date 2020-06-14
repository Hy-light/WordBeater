window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
let finalScore = 0;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const difficulty = document.querySelector('.difficulty');
const finalScor = document.querySelector('#final-score');

const words = [
  'hat',
  'river',
  'lucky',
  'forget',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'children',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'school',
  'money',
  'workplace',
  'life',
  'manipulate',
  'man',
  'python',
  'argument',
  'differientiation',
  'mathematics',
  'internet',
  'organized',
  'programming',
  'yearner',
  'immaculate',
  'entrepreneur',
  'accountability',
  'legacy',
  'indifferent',
  'procrastinate'
];

// Initialize Game
function init() {
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on wor4d input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every sec
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }

  // just added this
  finalScor.innerHTML = score;
}

// Match currentWord to WordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word

function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }

  // Show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
