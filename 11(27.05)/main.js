
let li_click = document.querySelectorAll("body>div>ul>li");
let ul_click = document.querySelectorAll("body>div>ul .ul_li_text");
let li_content = document.querySelectorAll(".static_ul_3 li");
let div_box = document.querySelectorAll(".text_arena");
let li_hover = document.querySelectorAll(".li_text");
let  bg_color = document.querySelector(".bg_color");
// Function click


let i;

function Fun(){
   let ul_1 = document.getElementById("ul_1");

	if (ul_1.style.display === "none") {
    ul_1.style.display = "block";
  } else {
    ul_1.style.display = "none";
  }
}

function Fun2(){
   let ul_2 = document.getElementById("ul_2");
   
  if (ul_2.style.display === "none") {
    ul_2.style.display = "block";
  } else {
    ul_2.style.display = "none";
  }
}

function Fun3(){
   let ul_3 = document.getElementById("ul_3");
   
  if (ul_3.style.display === "none") {
    ul_3.style.display = "block";
  } else {
    ul_3.style.display = "none";
  }
}


  
for (let i = 0;  i <li_click.length; i++) {



   bg_color.addEventListener("click", function(){

     	div_box[i].style.display = "none";
      bg_color.style.display = "none";


     	
     })

	li_content[i].addEventListener("click", function(){
if (div_box[i] = display = 'none') {
		div_box[i].style.display = 'block';
		div_box[i].style.top = "200px";
		bg_color.style.display = 'block';
  }
})
 }