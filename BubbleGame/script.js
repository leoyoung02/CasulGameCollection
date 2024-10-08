
    function makeBubble(){
    var clutter=""
    for(var i=1;i<=126;i++)
   {
      var rn=Math.floor(Math.random()*10)
      clutter=clutter+`<div id="bubble">${rn}</div>`;
   }
   document.querySelector("#pbtm").innerHTML=clutter;
}
makeBubble();
var hitrn = 0;
var timer=60;
function runTimer(){
      Timerint=setInterval(function(){
        if (timer>0)
        {
        timer--
        document.querySelector("#timervalue").textContent=timer
        }
        else{
            clearInterval(Timerint);
            document.querySelector("#pbtm").innerHTML=`<h1 id="lid">Game Over</h1>`;
        }
      },1000);
}
runTimer();
function getNewHit(){
      hitrn=Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent=hitrn;
}
//getNewHit();
let score = 0;
function increaseScore(){
    score=score+10;
    document.querySelector("#scoreval").textContent=score;
    
}
//increaseScore();
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent)
    console.log(clickednum)
    console.log(hitrn)
     if(clickednum==hitrn){
       increaseScore();
       getNewHit();
       makeBubble();
     }

});