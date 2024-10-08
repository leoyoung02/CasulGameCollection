const inputs=document.querySelectorAll("input");




    //=========================== events ===============================
    inputs[0].addEventListener("input",function(){
        emailValidation()
    })
    inputs[1].addEventListener("input",function(){
        passwordValidation()
    })
   
     
// ========================= form submit===========================
document.forms[0].addEventListener("submit",function(e){
    e.preventDefault();
   if(emailValidation()&&passwordValidation()){
    getFormData();
   }
   
})

function getFormData(){
    const user={
           
            email:inputs[0].value,
            password:inputs[1].value,
          
        }
        Login(user)
       
 
    }

// ========================= register===========================
   async  function Login(user){

    const PostMethod={
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type": "application/json"
        }
    }
        const api= await fetch(`https://movies-api.routemisr.com/signin`,PostMethod)
        const response=await api.json();  
        if(response.message=="success"){
            localStorage.setItem("userToken",response.token)
            document.getElementById("msg").innerHTML=response.message;
          
            setTimeout(function(){
                location.href="./home.html"

            },1000)
        }
        else{
            document.getElementById("msg").innerHTML=response.message;

        }

    }

    //=========================== vlidation ===============================

    
       
    function emailValidation(){
        const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

         if(regex.test(inputs[0].value)){
                inputs[0].classList.add("is-valid")
                inputs[0].classList.remove("is-invalid")
                return true;

        }
        else{
            inputs[0].classList.add("is-invalid")
            inputs[0].classList.remove("is-valid")
            return false;

        }
    }
    function passwordValidation(){
        const regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        
         if(regex.test(inputs[1].value)){
                inputs[1].classList.add("is-valid")
                inputs[1].classList.remove("is-invalid")
                return true;

        }
        else{
            inputs[1].classList.add("is-invalid")
            inputs[1].classList.remove("is-valid")
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
   
    
    

