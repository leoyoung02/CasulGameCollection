const links=document.querySelectorAll(".menu a");
const loader=document.querySelector(".loading")
//=============================== navbar color changes ==================
links.forEach(function(link){
    link.addEventListener("click",function(){
        document.querySelector(".menu .active").classList.remove("active");
        this.classList.add("active");
        getGames(this.getAttribute("data-category"));
    })

})


//=============================== get games from api ==================
 async function getGames(gameCategory){
    loader.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f33fddacaamshf61c5e66b48734fp14e017jsn688f10fb56ef',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategory}`,options)
    const response= await api.json();
    bedo=response;
    displayData(response)
    loader.classList.add("d-none")
    
    

}

//=============================== display data ==================
function displayData(data){
   
    let gamesBox=''
    for(let i=0;i<data.length;i++){
        let videoPath=data[i].thumbnail.replace("thumbnail.jpg","videoplayback.webm")
        gamesBox += `
        <div class="col">
        <div onmouseenter="startVideo(event)" onmouseleave="stopVideo(event)" onclick="showDetails(${data[i].id})"   class="card h-100 bg-transparent" role="button" >
           <div class="card-body">
        
              <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
        
               <video muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
                <source src="${videoPath}">
                </video>
        
              </figure>
        
              <figcaption>
        
                 <div class="hstack justify-content-between">
                    <h3 class="h6 small"> ${data[i].title} </h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                 </div>
        
                 <p class="card-text small text-center opacity-50">
                    ${data[i].short_description}
                 </p>
        
              </figcaption>
           </div>
        
           <footer class="card-footer small hstack justify-content-between">
        
              <span class="badge badge-color">${data[i].genre}</span>
              <span class="badge badge-color">${data[i].platform}</span>
        
           </footer>
        </div>
        </div>
        `;
    }
    document.getElementById("gameData").innerHTML=gamesBox


}
getGames("mmorpg")

//============================= show games details==================
 function showDetails(id){
   location.href=`./details.html?q=${id}`
 }


function startVideo(e){
const videoElement=e.target.querySelector("video");
videoElement.classList.remove("d-none");
videoElement.play();

}

function stopVideo(e){
    const videoElement=e.target.querySelector("video");
    videoElement.classList.add("d-none");
    videoElement.pause();
    videoElement.muted="true"
    
    }


    document.querySelector(".logout-btn").addEventListener("click",function(){
        localStorage.removeItem("userToken");
        location.href=`./index.html`
    })
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










