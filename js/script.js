
// 1: kamień, 2: papier, 3: nożyce.

function playGame(playerInput){
    clearMessages();
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);

    printMessage(displayResult(computerMove, playerMove));
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame("1")
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame("2")
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame("3")
  });