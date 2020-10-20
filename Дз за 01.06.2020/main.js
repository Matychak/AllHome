// 1

// let btn_click = document.querySelector(".btn_random");

// let cont_box = document.querySelector(".random_number");
// btn_click.addEventListener("click", function(event){
// 	let pereminna_target = event.target;
// 	if (pereminna_target.tagName == "BUTTON") {
// 	cont_box.textContent = (Math.floor(Math.random() * 101));
//    }
// })

// 2

// let cont = document.querySelector(".conteiner");
// let span = document.querySelector("span");

// document.body.addEventListener("mousemove", function(event){
// span.textContent = `X = ${event.clientX} Y = ${event.clientY}`;
// })
// 3
// function TextFunction() {
//   let text = document.getElementById("text");


//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }
// 4

// function TextFunction() {
//   let text = document.getElementById("text");

//    statement

//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

// last

// let $click = document.querySelectorAll("ul li");

// let $span = document.querySelectorAll("span");



//    for(let i = 0; i < $click.length; i++){
//       $click[i].addEventListener("click", function(event){

// $span[i].style.display = "block";

//       for (let j = 0; j <$span.length; j++) {

//                $span[j].style.top = '-650px';
//                $span[j].style.opacity  = '0';
// }
//       $span[i].style.opacity  = '1';
//       $span[i].style.top = '-15px';


//        })
//    }

// 5



// let $btn = document.querySelectorAll(".btn");

// let $ns = document.querySelectorAll(".ns");


// for(let i = 0; i < $btn.length; i++){
// $btn[i].addEventListener("click", function(event){

// 		let pereminna_target = event.target;
// 	if (pereminna_target.tagName == "BUTTON"){

// for(let j = 0; j < $ns.length; j++){
   
//    j = i;
//    $ns[j].remove();

// 	 }
// stopPropagation();
// }
// 	else{
// console.log('hello')
// }
// })
// }
	

	/*6*/

// let bar = document.getElementById("myBar");
// let width = 5;
// document.querySelector("button").addEventListener("click", function(event){

// let pereminna_target = event.target;
// 	if (pereminna_target.tagName == "BUTTON"){
// if (width == 100) {
// 	width = 0;
// }
// width += 5;
// bar.style.width = width + "%";
// bar.style.background = '#008A8A';
// bar.style.height = '25px'
// }
// })