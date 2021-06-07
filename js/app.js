/* eslint-disable no-var */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */

const userName = prompt('Hello There, Whats your name?');
alert('Welcome ' + userName + '! ');
alert('POP QUIZ!');

let userAnsweraboutme = confirm('do you think you know me enough?');
if (userAnsweraboutme = true) {alert('Lets see about that!');
}
else {alert('Lets play a game!');
}

var userScore = 0;
let smokeQuestion = prompt('do i smoke?').toLowerCase();
if (smokeQuestion === 'yes' || smokeQuestion === 'y' ){
  alert('WHATT?? I NEVER SMOKE!!');
} else if (smokeQuestion === 'no' || smokeQuestion === 'n' ){
  alert('Correct!!');
  console.log('Question1: True');
  userScore = userScore + 1;
} else {alert('WRONG! please enter a valid answer!');
}

let mastersQuestion = prompt('did i take a masters degree?').toLowerCase();
if (mastersQuestion === 'yes' || mastersQuestion === 'y' ){
  alert('MAN I THINK YOU REALLY KNOW ME!!');
  console.log('Question2: True');
  userScore = userScore + 1;
} else if (mastersQuestion === 'no' || mastersQuestion === 'n' ){
  alert('REALLY?? i have actually 2 not 0!!');
} else {alert('WRONG! please enter a valid answer!');
}

let catsQuestion = prompt('do i love cats?').toLowerCase();
if (catsQuestion === 'yes' || catsQuestion === 'y' ){
  alert('MAN YOU ARE DOING THIS!!');
  console.log('Question3: True');
  userScore = userScore + 1;
} else if (catsQuestion === 'no' || catsQuestion === 'n' ){
  alert('who doesnt love cats!!');
} else {alert('WRONG! please enter a valid answer!');
}

let programmingQuestion = prompt('can i learn programming?').toLowerCase();
if (programmingQuestion === 'yes' || programmingQuestion === 'y' ){
  alert('MAN YOU ARE GENIUOS!!');
  console.log('Question4: True');
  userScore = userScore + 1;
} else if (programmingQuestion === 'no' || programmingQuestion === 'n' ){
  alert('Man why you dont believe in me');
} else {alert('WRONG! please enter a valid answer!');
}

let designQuestion = prompt('did i study design?').toLowerCase();
if (designQuestion === 'yes' || designQuestion === 'y' ){
  alert('MAN WE HAVE TO MEET NOW!!');
  console.log('Question5: True');
  userScore = userScore + 1;
} else if (designQuestion === 'no' || designQuestion === 'n' ){
  alert('Man please get to know me better!');
} else {alert('WRONG! please enter a valid answer!');
}
alert('your score is ' + userScore + '! it was nice meeting you ' + userName +'!');
console.log(userScore);
