"use strict";

alert('Hello! \n Let\'s see how well you know me! \n Please enter \"Yes\" or \"No\" in the response box!');

var oldestchild = prompt('Am I the oldest child?').toLowerCase();
if (oldestchild === 'yes' || oldestchild === 'y') {
    alert('Nope! Actually, I\'m an only child');
  } else {
    alert('Correct!');
  };
    console.log('Did the user think I was the oldest child? ' + oldestchild);

var fingerprints = prompt('Do I have all ten fingerprints?').toLowerCase();
if (fingerprints === 'yes' || fingerprints === 'y') {
  alert('Unfortunately, I only have nine');
} else {
  alert('It\'s weird that you knew that...');
};
console.log('Did the user think I have all ten fingerprints? ' + fingerprints);

var chicknuggs = prompt('Can I eat a McDonald\'s 20 piece McNugget in one sitting?').toLowerCase();
if (chicknuggs === 'yes' || chicknuggs === 'y') {
  alert('I sure can, and I sure will');
} else {
  alert('Wrong. Have some faith in me.');
};
console.log('Did the user believe in my ability to eat 20 chicken nuggets? ' + chicknuggs);

var moviegenre = prompt('Is Romance my favorite movie genre?').toLowerCase();
if (moviegenre === 'yes' || moviegenre === 'y') {
  alert('Nope, take \'The Notebook\' somewhere else');
} else {
  alert('Correct!');
};
console.log('Did the user think my favorite movie genre was Romance? ' + moviegenre);

var lastanswer = prompt('Is the answer to this question no?').toLowerCase();
if (lastanswer === 'yes' || lastanswer === 'y') {
  alert('Correct!');
} else {
  alert('Nope!');
};
console.log('Did the use answer the last question yes? ' + lastanswer);
