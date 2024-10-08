var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var heading = document.querySelector("h1");
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
img1.setAttribute("src", "images/" + "dice" + randomNumber1 + ".svg");
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
img2.setAttribute("src", "images/" + "dice" + randomNumber2 + ".svg");
if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins this round.";
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins this round.";
} else {
    heading.textContent = "We've got a draw";

}