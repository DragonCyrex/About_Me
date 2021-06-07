
let userName = prompt('Hello There, Whats your name?');
alert('Welcome ' + userName + '! ');
alert('POP QUIZ!');
let userAnsweraboutme = confirm('do you think you know me enough?');
if (userAnsweraboutme = true) {alert('Lets see about that!');
}
else {alert('Lets play a game!');
}
let smokeQuestion = prompt('do i smoke?').toLowerCase;
var userScore = 0
if (smokeQuestion === 'yes' || smokeQuestion === 'y' ){
alert('WHATT?? I NEVER SMOKE!!');
}
else if (smokeQuestion === 'no' || smokeQuestion === 'n' ){
    alert('Corret!!')
    console.log("Question1: True")
    userScore = userScore + 1
}