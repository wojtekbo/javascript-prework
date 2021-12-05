
// 1: kamień, 2: papier, 3: nożyce.

let counter = 0;
function playGame(playerInput){
    clearMessages();
    let playerMove = getMoveName(playerInput);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    if(computerMove == 'kamień'){
        document.getElementById('computer-rock').style.display = "inline";
    }
    else if(computerMove == 'papier'){
        document.getElementById('computer-paper').style.display = "inline";
    }
    else if(computerMove == 'nożyce'){
        document.getElementById('computer-scissors').style.display = "inline";
    }
    let resultMsg = displayResult(computerMove, playerMove);
    printMessage(document.getElementById('result'), resultMsg);
    if(resultMsg == 'Wygrałeś!'){
        document.getElementById('result').style.color = "green";
        counter++;
        console.log(counter);
    }
    else if(resultMsg == 'Przegrałeś'){
        document.getElementById('result').style.color = "red";
    }
    printMessage(document.getElementById('counter'), 'Wygrane: ' + counter);
}

document.getElementById('player-rock').addEventListener('click', function(){
    playGame("1")
    document.getElementById('player-rock').style.backgroundColor = "#168aad";
  });
document.getElementById('player-paper').addEventListener('click', function(){
    playGame("2")
    document.getElementById('player-paper').style.backgroundColor = "#168aad";
  });
document.getElementById('player-scissors').addEventListener('click', function(){
    playGame("3")
    document.getElementById('player-scissors').style.backgroundColor = "#168aad";
  });