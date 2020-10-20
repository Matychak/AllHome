	 //
let closeClick = document.querySelector(".close");
let profil =document.querySelector(".profil");
let name =document.querySelector(".name_2");
let email = document.querySelector(".email_2");
let login = document.querySelector(".login_2");
let pass =  document.querySelector(".password_2");
let spanBgc = document.querySelector(".span");
let bgc = document.createElement("div");

 	function mfn(){
		let user = JSON.parse(localStorage.getItem("user"))[0];
	console.log(user)
let img = user.name[0].toUpperCase();
	
	let bgc = document.createElement("div");
	bgc.classList.add("bgc")
	let div = document.createElement("div");
	div.textContent = img;
	div.style.width = div.style.height = '50px';
	div.style.display = 'flex';
	div.style.justifyContent = 'center'
	div.style.alignItems = 'center';
	div.stylefontSize = "36px";
	div.style.fontWeight = '700';
	div.style.background = 'pink';
	div.style.border = '1px solid pink'
	div.style.borderRadius = '50%';
	div.style.marginLeft = '50%';
	div.style.marginTop = '-65px';
	bgc.style.background = '#B2A8D5';
	bgc.style.width = "100%";
	bgc.style.height = '80px';
bgc.innerHTML = `<span class = "span">Hello , ${user.name}</span>`;


	document.body.insertAdjacentElement("afterbegin", div)
		document.body.insertAdjacentElement("afterbegin", bgc);


closeClick.addEventListener("click", function(){
	bgc.style.display = "block";

profil.style.display = 'none';
div.style.display = 'flex';

	document.body.style.background = "white"
	
	
	

})

	div.addEventListener("click", function(){
	bgc.style.display = "none";
profil.style.display = 'block';
div.style.display = 'none';
		name.innerHTML = `${user.name}`
		 email.innerHTML = `${user.email}`;
		  login.innerHTML = `${user.login}`;
		   pass.innerHTML = `${user.password}`;
		   //profil
		   let bgc_pro = document.querySelector(".background")
	profil.style.top  = '800px'

	// bgc_pro.style.marginTop  = "984px"
document.body.style.background = `rgba(119,117,118,.8)`
	});
	}
//