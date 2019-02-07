let options = {
  rock: "assets/img/rock.jpg",
  paper: "assets/img/paper.jpg",
  scissors: "assets/img/scissors.jpg"
}

/*
//Mark's input to improve my functions
let winCondition = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

//Mark's input to improve my functions
function winObj() {
  let player = arrChoices[0]
  let comp = arrChoices[1]
  if (player == comp) {
    //tie
  } else if (winCondition[player] == comp) {
    //won
  } else {
    //lose
  }
}
*/

let arrChoices = [];

function playerChoice(choice) {
  document.getElementById('player-img').innerHTML = `<img src="${options[choice]}" alt="" class="mt-5"></img>`
  arrChoices.push(choice);
  random()
}

function computerChoice(choice) {
  document.getElementById('computer-img').innerHTML = `<img src="${options[choice]}" alt="" class="mt-5"></img>`
  arrChoices.push(choice);
  winner();
}

function random() {
  let choices = Object.keys(options)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = choices[choiceIndex]
  computerChoice(choice)
}


let pscore = 0;
let cscore = 0;

function winner() {

  if (arrChoices[0] == 'rock') {
    if (arrChoices[1] == 'rock') {
      document.getElementById('winner').innerText = "Tie"
    } else if (arrChoices[1] == 'paper') {
      document.getElementById('winner').innerText = "Computer Wins!"
      cscore++;
    } else {
      document.getElementById('winner').innerText = "Player Wins!"
      pscore++;
    }
  }

  if (arrChoices[0] == 'paper') {
    if (arrChoices[1] == 'rock') {
      document.getElementById('winner').innerText = "Player Wins!"
      pscore++
    } else if (arrChoices[1] == 'paper') {
      document.getElementById('winner').innerText = "Tie"
    } else {
      document.getElementById('winner').innerText = "Computer Wins!"
      cscore++
    }
  }

  if (arrChoices[0] == 'scissors') {
    if (arrChoices[1] == 'rock') {
      document.getElementById('winner').innerText = "Computer Wins!"
      cscore;
    } else if (arrChoices[1] == 'paper') {
      document.getElementById('winner').innerText = "Player Wins"
      pscore++
    } else {
      document.getElementById('winner').innerText = "Tie"
    }
  }
  arrChoices = [];
  document.getElementById('pScore').innerText = `Score: ${pscore}`
  document.getElementById('cScore').innerText = `Score: ${cscore}`
}