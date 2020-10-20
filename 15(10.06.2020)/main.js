let btn = document.querySelector("button");

let input = document.querySelectorAll(".wrapper input");

let name = document.querySelector(".first_name");
let contact = {

}

btn.addEventListener("click", function(event){
	event.preventDefault();
	for(let i = 0; i < input.length; i++){
		contact[input[i].getAttribute("name")] = input[i].value;
	}


	contact.PassConfirm = function(){
	if ((contact.password_c) == (contact.password)) {document.querySelector("input[name = 'password']").style.border = ' 2px solid green';
		document.querySelector("input[name = 'password_c']").style.border = ' 2px solid green';
		
	}

	else {
		document.querySelector("input[name = 'password']").style.border = ' 2px solid red';
		document.querySelector("input[name = 'password_c']").style.border = ' 2px solid red';
	}
}

contact.PassConfirm();



contact.CheckPass = function(){
	if ((contact.password).length < 8)  {
		document.querySelector("input[name = 'password']").style.border = ' 2px solid red';
	}

	else {
		document.querySelector("[name = 'password']").style.border = ' 2px solid green';
	}

}
contact.CheckPass();

contact.CheckEmail = function(){         

	if ((contact.email).indexOf("@") !== -1) {//Умову підглянув!
		document.querySelector("input[name = 'email']").style.border = ' 2px solid green';
	}
	else {
		document.querySelector("[name = 'email']").style.border = ' 2px solid red';
	}
}
contact.CheckEmail();

contact.FinishConfirm = function(){
	if ((contact.email).indexOf("@") !== -1 && (contact.password).length >= 8 && (contact.password_c) == (contact.password)) {
		alert("Hello" + " " + name.value)
	}
	else {
		alert("error in form")
	}
}
contact.FinishConfirm(); 
})
