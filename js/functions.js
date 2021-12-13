// 1: kamień, 2: papier, 3: nożyce.
const getMoveName = function (argMoveId) {
   if (argMoveId == 1) {
      return "kamień";
   } else if (argMoveId == 2) {
      return "papier";
   } else if (argMoveId == 3) {
      return "nożyce";
   } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
   }
};

const displayResult = function (argComputerMove, argPlayerMove) {
   if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      return "Wygrałeś!";
   } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      return "Przegrałeś";
   } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      return "Remis";
   } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      return "Remis";
   } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      return "Wygrałeś!";
   } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      return "Przegrałeś";
   } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      return "Przegrałeś";
   } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      return "Remis";
   } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      return "Wygrałeś!";
   } else {
      return "Błędne wartości";
   }
};

const printMessage = function (element, msg) {
   let div = document.createElement("div");
   div.innerHTML = msg;
   element.appendChild(div);
};

const clearMessages = function () {
   document.getElementById("result").innerHTML = "";
   document.getElementById("computer-input").innerHTML = "";
   document.getElementById("player-input").innerHTML = "";
   document.getElementById("counter").innerHTML = "";
   document.getElementById("computer-rock").style.display = "none";
   document.getElementById("computer-paper").style.display = "none";
   document.getElementById("computer-scissors").style.display = "none";
   document.getElementById("player-rock").style.backgroundColor = "#81b29a";
   document.getElementById("player-paper").style.backgroundColor = "#81b29a";
   document.getElementById("player-scissors").style.backgroundColor = "#81b29a";
   document.getElementById("result").style.color = "black";
};
