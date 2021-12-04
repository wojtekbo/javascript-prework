
let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber == 2){
    computerMove = 'pamier'
}
else if(randomNumber == 3){
    computerMove = 'nozyce'
}
console.log(randomNumber)
printMessage(computerMove);