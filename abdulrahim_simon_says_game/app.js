// for game button press
let gameSeq=[];

// for user button press
let userSeq=[];
let highest=[0,1];

let btns=["red", "yellow","green","purple"];


let started=false;
let level=0;
let highscore=0;

let h2=document.querySelector("h2");

// game start
let strat=document.querySelector(".start");
strat.addEventListener("click",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    levelUp();
    }
});

//games flash button
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

// user press flash button 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

//level Increase
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;
   
    // random color generate
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`)
        gameSeq.push(randomColor);
        console.log(gameSeq);
     
     // game flash call   
    gameFlash(randomBtn);

}

//check ans 
function checkAns(idx){
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
   } else{
    h2.innerHTML= `Game Over! Your score was <b>${level}</b><br>Click Start button to start the game.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="black";
    },150);

    if(level > highscore){
        highscore=level;
        document.querySelector("#highscore").innerText=highscore;
    }
    level=0;
    reset();
}
}

// Button press
function btnPress(){
    let btn=this;

    //user flash call
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    // check Ans call
    checkAns(userSeq.length-1);
}

//All button Select
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

// game reset
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


