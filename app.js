"use strict";

//quiz wrapped in an event listener

document.getElementById('button').addEventListener('click', function() {

  var userName = prompt('Welcome to my "About Me" page! \n What is your name?');
  alert('Nice to meet you, ' + userName + '! \n Let\'s see how well you know me! \n Please enter \"Yes\" or \"No\" in the response box!');
  var answersCorrect = 0;

    // 5 questions about me with yes or no answers

  function aboutMeQuestions() {
    var myQuestions = ['Am I the oldest child?', 'Do I have all ten fingerprints?', 'Can I eat a McDonald\'s 20 piece McNugget in one sitting?', 'Is my favorite movie genre Romance?', 'Do I love my dog?'];
    var myWordAnswers = ['no', 'no', 'yes', 'no', 'yes'];
    var myLetterAnswers = ['n', 'n', 'y', 'n', 'y'];


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
  };
  aboutMeQuestions();

  //a number guessing game where the user has 4 tries

  function guessingGame() {
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
        answersCorrect++;
      } else {
        alert('Please enter a number');
      };
      if (guessesLeft === 0) {
        alert('Sorry, you\'re all out of guesses!');
      };
      console.log('The user guessed ' + userGuess);
    };
  };
  guessingGame();

  //a question with multiple correct answers stored in an array
  //user gets 6 tries

  function hairColor() {
    console.log('sure is!');
    var newGuessesLeft = 6;
    var newUserGuess;
    while (newGuessesLeft > 0) {
      newUserGuess = prompt('Guess a color I have dyed my hair?').toLowerCase();
      var fruit = ['black', 'pink', 'green', 'blue', 'purple', 'red'];
      if (fruit.includes(newUserGuess)) {
        newGuessesLeft = -1;
        answersCorrect++;
        alert('Correct!');
      } else {
        newGuessesLeft--;
        alert('Wrong!');
      };
      if (newGuessesLeft === 0) {
        alert('The colors I have dyed my hair so far are black, pink, green, blue, purple, and red!');
      };
      console.log('The user guessed ' + newUserGuess);
    };
  };
  hairColor();

  //final alert letting the user know their score

  alert('You\'re all done with the quiz, ' + userName + '! \n I hope you had as much fun answering it as I had making it! \n You got a total of ' + answersCorrect + ' out of 7 right!');;

  //make quiz section appear after user is done
  
  document.getElementById('quiz-answers').style.display = "inline-block";
});
