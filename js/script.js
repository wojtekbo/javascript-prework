
// 1: kamień, 2: papier, 3: nożyce.

let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber == 2){
    computerMove = 'papier'
}
else if(randomNumber == 3){
    computerMove = 'nożyce'
}
console.log(randomNumber)
printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = 'nieznany ruch';
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + playerMove);
