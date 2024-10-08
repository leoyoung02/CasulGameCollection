var player1Number = Math.floor( Math.random() * 6) + 1;

var player2Number = Math.floor( Math.random() * 6) + 1;

var player1Dice = "dice" + player1Number + ".png";

var player2Dice = "dice" + player2Number + ".png";


// DOM Below //

document.querySelectorAll(".player_div .image_div img")[0].setAttribute("src", player1Dice);

document.querySelectorAll(".player_div .image_div img")[1].setAttribute("src", player2Dice);

// DOM Above //

if ( player1Dice == player2Dice )
{
    document.querySelectorAll(".player_div .pla h3")[0].textContent=" DRAW";
    document.querySelectorAll(".player_div .pla h3")[1].textContent="DRAW";
}
else if ( player1Dice > player2Dice )
{
    document.querySelectorAll(".player_div .pla h3")[0].textContent="Sajal wins";
    document.querySelectorAll(".player_div .pla h3")[1].textContent="Namrata tum haar gai ";
}
else
{
    document.querySelectorAll(".player_div .pla h3")[1].textContent="Namrata wins";
    document.querySelectorAll(".player_div .pla h3")[0].textContent="sajal haar gya";
}

