"use strict";

var userName = prompt('Welcome to my "About Me" page! \n What is your name?');
alert('Nice to meet you, ' + userName + '! \n Let\'s see how well you know me! \n Please enter \"Yes\" or \"No\" in the response box!');

// 5 questions about me with yes or no answers
var myQuestions = ['Am I the oldest child?', 'Do I have all ten fingerprints?', 'Can I eat a McDonald\'s 20 piece McNugget in one sitting?', 'Did the user think my favorite movie genre was Romance?', 'Do I love my dog?'];
var myWordAnswers = ['no', 'no', 'yes', 'no', 'yes'];
var myLetterAnswers = ['n', 'n', 'y', 'n', 'y'];
var answersCorrect = 0;

for (var i = 0; i < myQuestions.length; i++) {
  var userResponse = prompt(myQuestions[i].toLowerCase());
    if (userResponse === myWordAnswers[i] || userResponse === myLetterAnswers[i]) {
      alert('Correct!');
      answersCorrect++;
    } else {
      alert('Wrong!');
    }
    console.log('The user gave the answer ' + userResponse[i] + ' to the question ' + myQuestions[i]);
};

//a number guessing game where the user has 4 tries
var myNumber = 13;
var guessesLeft = 4;
var userGuess;

while (guessesLeft > 0 && userGuess !== myNumber) {
userGuess = parseInt(prompt('Guess a number between 10 - 20'));
  if (userGuess > myNumber) {
    guessesLeft--;
    alert('Your guess is too high \n You have ' + guessesLeft + ' guesses remaining!');
  } else if (userGuess < myNumber) {
    guessesLeft--;
    alert('Your guess is too low  \n You have ' + guessesLeft + ' guesses remaining!');
  } else if (userGuess === myNumber) {
    alert('Correct answer!');
    answersCorrect++ ;
  } else {
    alert('Please enter a number');
  };
  if (guessesLeft === 0) {
    alert('Sorry, you\'re all out of guesses!');
  };
}


//a question with multiple correct answers stored in an array

guessesLeft = 6;
while (guessesLeft > 0) {
  console.log(guessesLeft);
  userGuess = prompt('Guess a color I have dyed my hair?').toLowerCase();
  var fruit = ['black', 'pink', 'green', 'blue', 'purple', 'red'];
    if (fruit.includes(userGuess)){
    guessesLeft = guessesLeft - 6;
    alert('Correct!');
      } else {
      guessesLeft--;
      alert('Wrong!');
    };
    if (guessesLeft === 0) {
    alert('The colors I have dyed my hair so far are black, pink, green, blue, purple, and red!');
    };
  }




console.log('The user has gotten ' + answersCorrect + ' answers correct');
