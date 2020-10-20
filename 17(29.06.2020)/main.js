let wrapper = document.querySelector(".wrapper");


let wrapper2 = document.querySelector(".wrapper2");
/*Function for click arrow*/

function my() {
  let x = document.getElementById("arroww");
  if (wrapper.style.display === "none") {
    wrapper.style.display = "none";
  } else {
    wrapper2.style.display = "block"
    wrapper.style.display = "none"
  }
}

function my2() {
  let x = document.getElementById("arroww2");
  if (wrapper2.style.display === "none") {
    wrapper2.style.display = "none";
  } else {
    wrapper.style.display = "block"
    wrapper2.style.display = "none"
  }
}

let login = document.querySelector(".login_1");
let password = document.querySelector(".password_1");
let $btn = document.querySelector('.sing_in_2');
 let email = document.querySelector(".email");
  let name = document.querySelector(".name");
$btn.addEventListener("click", function(){

 
let user =[ 
{

name:name.value,
email:email.value,
login:login.value,
password:password.value
}
]

    localStorage.setItem('user',JSON.stringify(user));

});

//


let $login_form = document.querySelector(".login");

let $pass_form = document.querySelector(".password");
let sing_in = document.querySelector(".sing_in");

sing_in.addEventListener("click", function(){
 let pers = JSON.parse(localStorage.getItem('user'));
    let if_ok;
    for(let i=0; i<pers.length; i++){
        if(pers[i]['name'] == $login_form.value && pers[i]['password'] == $pass_form.value){
            if_ok = true
            
        }
    }
    if(if_ok){
        sing_in.setAttribute("href", "main2.html")
    }
    else{
        alert("You don't found in system" )
    }
})