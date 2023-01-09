let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let compChoice = choices[randomNum];
    return compChoice;
}

const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');
const outcome = document.querySelector("#outcome");
const removeLi = document.querySelector("li");


rockImg.addEventListener('click', rockClicked);
paperImg.addEventListener('click', paperClicked);
scissorsImg.addEventListener('click', scissorsClicked);


function rockClicked(e) {
    let userChoice = "rock";
    let compChoice = getComputerChoice();
    const li = document.createElement('li');

    e.preventDefault();
    console.log('rock');

    if (userChoice === compChoice) {
        console.log('TIE');
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("TIE"));
        outcome.appendChild(li);
    } else if (compChoice === "paper") {
        console.log("YOU LOSE");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU LOSE"));
        outcome.appendChild(li);
    } else {
        console.log("YOU WIN");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU WIN"));
        outcome.appendChild(li);
    }
}

function paperClicked(e) {
    e.preventDefault();
    console.log('paper');
    let userChoice = "paper";
    let compChoice = getComputerChoice();
    const li = document.createElement('li');

    if (userChoice === compChoice) {
        console.log('TIE');
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("TIE"));
        outcome.appendChild(li);
        
    } else if (compChoice === "scissors") {
        console.log("YOU LOSE");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU LOSE"));
        outcome.appendChild(li);
    } else {
        console.log("YOU WIN");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU WIN"));
        outcome.appendChild(li);
    }
}

function scissorsClicked(e) {
    e.preventDefault();
    console.log('scissors');
    const li = document.createElement('li');
    let userChoice = "scissors"
    let compChoice = getComputerChoice();
    
    if (userChoice === compChoice) {
        console.log('TIE');
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("TIE"));
        outcome.appendChild(li);
    } else if (compChoice === "rock") {
        console.log("YOU LOSE");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU LOSE"));
        outcome.appendChild(li);
    } else {
        console.log("YOU WIN");
        outcome.innerHTML = '';
        li.appendChild(document.createTextNode("YOU WIN"));
        outcome.appendChild(li);
    }
}