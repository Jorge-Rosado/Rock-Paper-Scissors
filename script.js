//button variables
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
//display variables
let displayChoice = document.querySelector(".displayChoice");
let displayCompChoice = document.querySelector(".displayCompChoice");
let displayResult = document.querySelector(".result");

//generates randomly the computer's answer(rock=0 paper=1 or scissors=2)
function computerAnswer(){
  let number = Math.floor(Math.random() * 3)
  if(number == 0){
    displayCompChoice.innerHTML = "The computer chose:Rock"
    return number
  }else if(number == 1){
     displayCompChoice.innerHTML = "The computer chose:Paper"
    return number
  }else if(number == 2){
     displayCompChoice.innerHTML = "The computer chose:Scissors"
    return number
  };
};

//compares the player answer with the computer answer
function compareAnswers(computerAnswer){
  if(playerAnswer == computerAnswer){
    displayResult.innerHTML = "Draw!"
  }else if(playerAnswer == 0 && computerAnswer == 1){
    displayResult.innerHTML = "You Lost :("
  }else if(playerAnswer == 0 && computerAnswer == 2){
    displayResult.innerHTML = "You Won!"
  }else if(playerAnswer == 1 && computerAnswer == 0){
    displayResult.innerHTML = "You Won!"
  }else if(playerAnswer == 1 && computerAnswer == 2){
    displayResult.innerHTML = "You Lost :("
  }else if(playerAnswer == 2 && computerAnswer == 0){
    displayResult.innerHTML = "You Lost :("
  }else if(playerAnswer == 2 && computerAnswer == 1){
    displayResult.innerHTML = "You Won!"
  };
};

let playerAnswer = 10
//on click events
rock.onclick = function(){
  playerAnswer = 0
  displayChoice.innerHTML = "You Chose:Rock"
  let number = computerAnswer();
  compareAnswers(number);
};

paper.onclick = function(){
  playerAnswer = 1
  displayChoice.innerHTML = "You Chose:Paper"
  let number = computerAnswer();
  compareAnswers(number);
};

scissors.onclick = function(){
  playerAnswer = 2
  displayChoice.innerHTML = "You Chose:Scissors"
  let number = computerAnswer();
  compareAnswers(number);
};
