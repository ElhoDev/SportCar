let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");
let locate1 = document.getElementById('locate1')
let locate2 = document.getElementById('locate2')
let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);







    let password = document.getElementById('password');
let name = document.getElementById('name');
let email = document.getElementById('email')
let databtn = document.getElementById('locate1', 'locate2')
   
    
function form(){ 
    databtn.addEventListener ('click',(e)=>{
        
        e.preventDefault()
        let objdata = { 
            names:name.value,
            emails:email.value,
            passwords:password.value 
        } 
        console.log(objdata)
        localStorage.setItem('Data about person:', JSON.stringify(objdata))
    })

    
       
        
}

form()




        locate1.addEventListener('click', ()=> {
            window.location.href = './index.html'
            })
            
            locate2.addEventListener('click', ()=> {
                window.location.href = './index.html'
                })