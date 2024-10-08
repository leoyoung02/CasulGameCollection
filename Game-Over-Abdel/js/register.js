const inputs=document.querySelectorAll("input");




    //=========================== events ===============================
    inputs[0].addEventListener("input",function(){
        nameValidation(inputs[0])
    })
    inputs[1].addEventListener("input",function(){
        nameValidation(inputs[1])
    })
    inputs[2].addEventListener("input",function(){
        emailValidation()
    })
    inputs[3].addEventListener("input",passwordValidation)
    inputs[4].addEventListener("input",ageValidation)
     
// ========================= form submit===========================
document.forms[0].addEventListener("submit",function(e){
    e.preventDefault();
   if(nameValidation(inputs[0])&&nameValidation(inputs[1])&&emailValidation()&&passwordValidation()&&ageValidation()){
    getFormData();
   }
   
})

function getFormData(){
    const user={
            first_name:inputs[0].value,
            last_name:inputs[1].value,
            email:inputs[2].value,
            password:inputs[3].value,
            age:inputs[4].value,
        }
        register(user)
       
 
    }

// ========================= register===========================
   async  function register(user){

    const PostMethod={
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type": "application/json"
        }
    }
        const api= await fetch(`https://movies-api.routemisr.com/signup`,PostMethod)
        const response=await api.json();  
        if(response.message=="success"){
            document.getElementById("msg").innerHTML=response.message;
            
            setTimeout(function(){
                location.href="./index.html"

            },1000)
        }
        else{
            document.getElementById("msg").innerHTML=response?.errors.email.message;

        }

    }

    //=========================== vlidation ===============================

    function nameValidation(input){
        const regex=/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
        if(regex.test(input.value)){
            input.classList.add("is-valid")
            input.classList.remove("is-invalid")
            return true;

        }
        else{
            input.classList.add("is-invalid")
            input.classList.remove("is-valid")
            return false;

        }
    }
    function emailValidation(){
        const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

         if(regex.test(inputs[2].value)){
                inputs[2].classList.add("is-valid")
                inputs[2].classList.remove("is-invalid")
                return true;

        }
        else{
            inputs[2].classList.add("is-invalid")
            inputs[2].classList.remove("is-valid")
            return false;

        }
    }
    function passwordValidation(){
        const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        
         if(regex.test(inputs[3].value)){
                inputs[3].classList.add("is-valid")
                inputs[3].classList.remove("is-invalid")
                return true;

        }
        else{
            inputs[3].classList.add("is-invalid")
            inputs[3].classList.remove("is-valid")
            return false;

        }
    }
    function ageValidation(){
        const regex=/^([1-7][0-9]|80)$/
        
         if(regex.test(inputs[4].value)){
                inputs[4].classList.add("is-valid")
                inputs[4].classList.remove("is-invalid")
                return true;

        }
        else{
            inputs[4].classList.add("is-invalid")
            inputs[4].classList.remove("is-valid")
            return false;

        }
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
     
    

