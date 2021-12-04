
// 1: kamień, 2: papier, 3: nożyce.

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

printMessage(displayResult(computerMove, playerMove));