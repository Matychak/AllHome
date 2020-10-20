// 1 

// let user_login = document.querySelector(".login");

// let user_password = document.querySelector(".password");

// let check_click;


// let btn_click = document.querySelector(".btn_click");

// let click = 0;
// function fun_rem() {

// check_click = document.getElementById('check_click');
//     if (check_click.checked) {
//         console.log(check_click.checked);
//         click++;
// console.log(click)
//     }
//     else {
//        console.log(check_click.checked);
//     }
// }

// let text;
// btn_click.addEventListener("click", function(){
// 	if(click > 0){
// 			alert("Hello," + " " + user_login.value + " , " + " I remember you!)" );
// 	}
// 	else{
// 					alert("Hello," + " " + user_login.value + " , " + "I don't remember you!(" );
// 	}
// 	console.log(text)

// })

//

// 2 

// let just_pass = document.querySelector(".just_pass");

// let r_pass = document.querySelector(".r_pass");
// let email_user = document.querySelector(".email");

// let btn_click = document.querySelector(".btn_click");

// let login = document.querySelector(".login")

// btn_click.addEventListener("click", function(){


// if (just_pass.value == r_pass.value && email_user.value != 0 && login.value > 0 && just_pass.value > 0 && r_pass.value > 0) {
// 	alert("To the post office" + " ,  " + email_user.value   + " , " + "a confirmation email has been sent");
// 	// alert("ok")
// }

// else{
	
// 	if(just_pass.value != r_pass.value) {
// 	alert("passwords don't repeat")
// }
// if(just_pass.value != r_pass.value || email_user.value == 0 || login.value == 0 || just_pass.value == 0 || r_pass.value == 0){
// alert('One of the forms is not filled');
// }
// }

// })

// 3

// btn
// let btn_save = document.querySelector(".btn");

// let save_arena = document.querySelector(".second_td")



// let skill_user = document.querySelector(".skill_user");

// //form

// let f_name = document.querySelector(".f_name");
// let birth = document.querySelector(".birth");
// let count = document.querySelector(".count");
// let l_name = document.querySelector(".l_name");
// let male_user = document.querySelector(".Male_user");
// let female_user = document.querySelector(".female_user");
// let city = document.querySelector(".city");


// // form result

// let First_name = document.querySelector(".First_name");
// let Last_name = document.querySelector(".Last_name");
// let birthday_user = document.querySelector(".birthday_user");
// let gand_user = document.querySelector(".gand_user");
// let countr_user = document.querySelector(".countr_user");
// let city_user = document.querySelector(".city_user");
// // skill
// let htm = document.querySelector(".html");

// let cs = document.querySelector(".css");

// let js = document.querySelector(".js");

// let php = document.querySelector(".php");

// let c_p = document.querySelector(".c_p");

// let java = document.querySelector(".java");

// let c = document.querySelector(".c");



// // function checked and btn click

// function fun_rem() {
// let input_skl = document.getElementById("input_skl1");

// let input_skl2 = document.getElementById("input_skl2");

// let input_skl3 = document.getElementById("input_skl3");

// let input_skl4 = document.getElementById("input_skl4");

// let input_skl5 = document.getElementById("input_skl5");

// let input_skl6 = document.getElementById("input_skl6");

// let input_skl7 = document.getElementById("input_skl7");
// btn_save.addEventListener("click", function(){
 
//  // checked input
//  if (input_skl1.checked) {
// 	htm.innerHTML = "HTML,";

// }
// else {
// 	console.log("error");
// }


// // 2


//  if (input_skl2.checked) {
// 	cs.innerHTML = "CSS,";

// }
// else {
// 	console.log("error2");
// }
 
 

//  // 3
//   if (input_skl3.checked) {
// 	js.innerHTML = "JS,";

// }
// else {
// 	console.log("error3");
// }
 
//  // 4

//   if (input_skl4.checked) {
// 	php.innerHTML = "PHP,";

// }
// else {
// 	console.log("error4");
// }
 
// // 5 

//   if (input_skl5.checked) {
// 	c_p.innerHTML = "C++,";

// }
// else {
// 	console.log("error5");
// }
 
// // 6 

//   if (input_skl6.checked) {
// 	java.innerHTML = "JAVA,";

// }
// else {
// 	console.log("error6");
// }

// // 7
//  if (input_skl7.checked) {
// 	c.innerHTML = "C#";

// }
// else {
// 	console.log("error7");
// }

// // Gander 

// if (male_user.checked) {
// 	gand_user.textContent ="Male";
// }

// if (female_user.checked) {
// 	gand_user.textContent ="Female";
// }
// // form

// First_name.textContent = f_name.value;

// Last_name.textContent = l_name.value;

// birthday_user.textContent = birth.value;

// // 

// countr_user.textContent = count.value;

// city_user.textContent = city.value;
//  })
// }

// 



// last


// add element for js
let conteiner = document.querySelector(".answer_question");

let cont = document.querySelector(".conteiner")
let cor_que = document.querySelector(".cor_que");

let inp_cor = document.querySelector(".inp_cor");

let  inp_wro = document.querySelector(".inp_wro");


// create div
let qs = document.createElement("div");

let ca = document.createElement("div");

let wa = document.createElement("div");

//create class for div

qs.classList.add("qs");

ca.classList.add("ca");

wa.classList.add("wa");

// add element for html

conteiner.insertAdjacentElement("beforeend", qs);
conteiner.insertAdjacentElement("beforeend", ca);
conteiner.insertAdjacentElement("beforeend", wa);

// add 

let qs_c = document.querySelector(".qs");

let ca_c = document.querySelector(".ca");

let wa_c = document.querySelector(".wa");

// button

let btn = document.querySelector("button");

btn.addEventListener("click", function(){

qs_c.textContent = cor_que.value;

ca_c.textContent = "Correct answer : " + inp_cor.value;


wa_c.textContent = "Wrong answer : " + inp_wro.value;

btn.style.top = '0px';
cont.style.top = '75px';
})