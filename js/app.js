'use strict';
let userName = prompt('Hello There, Whats your name?');
alert('Welcome ' + userName + '! ');
alert('POP QUIZ!');
let userAnsweraboutme = confirm('do you think you know me enough?');
if (userAnsweraboutme) {alert('Lets see about that!');
}
else {alert('Lets play a game!');
}
let userScore = 0;

function userAnswer(question,correct,wrong){
  let userQuestion = prompt(question).toLowerCase();
  while (
    userQuestion !== 'yes' &&
    userQuestion !== 'y' &&
    userQuestion !== 'no' &&
    userQuestion !== 'n'
  ) {
    alert('wrong Answer');
    userQuestion = prompt(question).toLowerCase();
  }

  if (userQuestion === 'yes' || userQuestion === 'y') {
    userQuestion = alert(correct);
    userScore++;
  } else {
    userQuestion = alert(wrong);
  }
}
userAnswer(
  'do i smoke?',
  'WHATT?? I NEVER SMOKE!!',
  'Correct!!'
);
userAnswer(
  'did i take a masters degree?',
  'MAN I THINK YOU REALLY KNOW ME!!',
  'REALLY?? i have actually 2 not 0!!'
);
userAnswer(
  'do i love cats?',
  'MAN YOU ARE DOING THIS!!',
  'Man please get to know me better!'
);userAnswer(
  'can i learn programming?',
  'MAN YOU ARE GENIUS!!',
  'GREAT JOB!!'
);userAnswer(
  'did i study design?',
  'MAN WE HAVE TO MEET NOW!!',
  'Man please get to know me better!'
);





//let userScore = 0;
// let smokeQuestion = prompt('do i smoke?').toLowerCase();
// if (smokeQuestion === 'yes' || smokeQuestion === 'y' ){
//   alert('WHATT?? I NEVER SMOKE!!');
// } else if (smokeQuestion === 'no' || smokeQuestion === 'n' ){
//   alert('Correct!!');
//   console.log('Question1: True');
//   userScore = userScore + 1;
// } else {alert('WRONG! please enter a valid answer!');
// }

// let mastersQuestion = prompt('did i take a masters degree?').toLowerCase();
// if (mastersQuestion === 'yes' || mastersQuestion === 'y' ){
//   alert('MAN I THINK YOU REALLY KNOW ME!!');
//   console.log('Question2: True');
//   userScore = userScore + 1;
// } else if (mastersQuestion === 'no' || mastersQuestion === 'n' ){
//   alert('REALLY?? i have actually 2 not 0!!');
// } else {alert('WRONG! please enter a valid answer!');
// }

// let catsQuestion = prompt('do i love cats?').toLowerCase();
// if (catsQuestion === 'yes' || catsQuestion === 'y' ){
//   alert('MAN YOU ARE DOING THIS!!');
//   console.log('Question3: True');
//   userScore = userScore + 1;
// } else if (catsQuestion === 'no' || catsQuestion === 'n' ){
//   alert('who doesnt love cats!!');
// } else {alert('WRONG! please enter a valid answer!');
// }

// let programmingQuestion = prompt('can i learn programming?').toLowerCase();
// if (programmingQuestion === 'yes' || programmingQuestion === 'y' ){
//   alert('MAN YOU ARE GENIUS!!');
//   console.log('Question4: True');
//   userScore = userScore + 1;
// } else if (programmingQuestion === 'no' || programmingQuestion === 'n' ){
//   alert('Man why you dont believe in me');
// } else {alert('WRONG! please enter a valid answer!');
// }
// let designQuestion = prompt('did i study design?').toLowerCase();
// if (designQuestion === 'yes' || designQuestion === 'y' ){
//   alert('MAN WE HAVE TO MEET NOW!!');
//   console.log('Question5: True');
//   userScore = userScore + 1;
// } else if (designQuestion === 'no' || designQuestion === 'n' ){
//   alert('Man please get to know me better!');
// } else {alert('WRONG! please enter a valid answer!');
// }

let userGuessuni = prompt('how old was i when i worked at SAE?, you have 4 attempts!');
for ( let i=1; i < 4; i++){
  userGuessuni = parseInt(userGuessuni);
  if (userGuessuni === 28){
    alert('GREAT JOB!!');
    userScore = userScore + 1;
    break;
  }
  else if (userGuessuni < 28 && userGuessuni > 20){
    alert('the number is low');
    userGuessuni = prompt('how old was i when i worked at SAE?, you have ' + (4-i) + ' attempts!');
  }
  else if (userGuessuni < 20 ){
    alert('the number is too low');
    userGuessuni = prompt('how old was i when i worked at SAE?, you have ' + (4-i) + ' attempts!');
  }
  else if (userGuessuni > 28 && userGuessuni < 36){
    alert('the number is high');
    userGuessuni = prompt('how old was i when i worked at SAE?, you have ' + (4-i) + ' attempts!');
  }
  else if (userGuessuni > 36 ){
    alert('the number is too high');
    userGuessuni = prompt('how old was i when i worked at SAE?, you have ' + (4-i) + ' attempts!');
  }
  else {
    alert('Wrong Input');
    userGuessuni = prompt('how old was i when i worked at SAE?, you have ' + (4-i) + ' attempts!');
  }
  if (i === 3){
    alert('YOU HAVE USED ALL YOUR ATTEMPTS');
    alert('i was 28 years old when i joined SAE, FYI');
    break;
  }
}
let userGuessgame = [7, 12, 18, 23, 28];
let userGuesschoice = parseInt(prompt('Guess a number between 1-30, you have 6 attempts'));
let userHasfoundit = false;
for (let i = 1; i < 6; i++) {
  for (let j = 0; j< userGuessgame.length; j++)
  {
    if (parseInt(userGuesschoice) === userGuessgame[j])
    {
      userHasfoundit = true;
      break;
    }
  }
  if (userHasfoundit){
    alert('MAN! YOU FOUND IT');
    userScore = userScore + 1;
    break;
  }
  if (i === 5) {
    alert('YOU ARE OUT OF ATTEMPTS');
    break;
  }
  userGuesschoice = parseInt(prompt('Guess a number between 1-30 you still have ' + (6 - i) + ' attempts'));
}
let userAnswers = '';
for (let i = 0;i < userGuessgame.length;i++){
  if (i === userGuessgame.length - 1){
    userAnswers += userGuessgame[i] + '.';
    break;
  }
  userAnswers += userGuessgame[i] + ', ';
}
alert('The Correct Numbers are: ' + userAnswers);
alert('your score is ' + userScore + '/7! it was nice meeting you ' + userName +'!');
console.log(userScore);
