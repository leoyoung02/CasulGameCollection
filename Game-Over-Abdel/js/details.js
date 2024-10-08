let searchParams=location.search;
let params=new URLSearchParams(searchParams);
let id=params.get("q");
console.log(id);
 (async function gameDetails(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f33fddacaamshf61c5e66b48734fp14e017jsn688f10fb56ef',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
    console.log(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`);
    const response= await api.json();
    displayDetails(response)
    console.log(response);

})()

 

 function displayDetails(data){
    document.body.style.cssText=`
    background-image:url("${data.thumbnail.replace("thumbnail","background")}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`
let gameData=`
<div class="col-md-4">
<figure >
   <img src="${data.thumbnail}" class="w-100 h-100" alt="details image" />
</figure>
</div>
<div class="col-md-8">

<div>
   <nav aria-label="breadcrumb">
      <ol class="breadcrumb" class="text-light">
         <li class="breadcrumb-item text-reset"><a id="link" href="./home.html">Home</a></li>
         <li class="breadcrumb-item text-info" aria-current="page">${data.title}</li>
      </ol>
   </nav>

   <h1>${data.title}</h1>

   <h3>About ${data.title}</h3>
   <p>${data.description}</p>

   <a class="btn btn-primary" id="play" href='${data.game_url}'>Game Site</a>

   
</div>
</div>
`
document.getElementById("detailsData").innerHTML=gameData;
    
 }
 //======================================= themes (dark mode &light mode) ===============================
 const modeBtn=document.getElementById("mode")
 const htmlEl= document.documentElement;     
 if(localStorage.getItem("mode") != null){
    htmlEl.setAttribute("data-theme",localStorage.getItem("mode"))
    if(htmlEl.getAttribute("data-theme")=="light"){
      modeBtn.classList.replace("fa-sun","fa-moon")
    }
    else{
        modeBtn.classList.replace("fa-moon","fa-sun")
    }
 }
 modeBtn.addEventListener("click",function(e){
   
     if(htmlEl.getAttribute("data-theme")=="dark"){
         htmlEl.setAttribute("data-theme","light")
         e.target.classList.replace("fa-sun","fa-moon")
         localStorage.setItem("mode","light")

     }
     else if(htmlEl.getAttribute("data-theme")=="light"){
         htmlEl.setAttribute("data-theme","dark")
         e.target.classList.replace("fa-moon","fa-sun")
         localStorage.setItem("mode","dark")
     }
 })


 





