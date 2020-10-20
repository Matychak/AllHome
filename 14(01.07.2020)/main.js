function PageLoaded(){
let $input = document.querySelector(".lists");

let $ul = document.querySelector(".todos");

loadToDo()
let ul_all = document.querySelector("ul");
let $span = document.querySelectorAll(".todos span");

let $save = document.querySelector(".save");

let $clear = document.querySelector(".clear");

let $btnT = document.querySelector(".tipBtn");

let $btnTC = document.querySelector(".closebtn");

let overlay = document.querySelector(".overlay1");
function deleteToDo(){
	for(let i = 0; i < $span.length; i++){
		$span[i].addEventListener("click", function(){
			this.parentElement.remove();
		})
	}
}

deleteToDo();
$input.addEventListener("keypress", function(key){
	if (key.which == 13) {
		let value = this.value;
		this.value = "";
		if (value && value.trim()) {
			let li = document.createElement("li");
			let span = document.createElement("span");
			let icon = document.createElement("i");
		icon.classList.add("fas", "fa-trash-alt");
		
		span.insertAdjacentElement("afterbegin", icon);
		li.textContent = value;
		li.insertAdjacentElement("afterbegin", span);
		$ul.insertAdjacentElement("afterbegin", li);
		$span = document.querySelectorAll(".todos span");
		deleteToDo();

		}
	}

})

let $clear_ul = document.querySelectorAll(".clear_li");
$clear.addEventListener("click", function(){
	localStorage.removeItem("list");
	ul_all.innerHTML = "";
	
});
$ul.addEventListener("click", function(event){
let el = event.target.tagName.toLowerCase();
	if (el == "li") {
		event.target.classList.toggle("checked");

	}
});
$save.addEventListener("click", function(){
	localStorage.setItem("list", $ul.innerHTML);
});

$btnT.addEventListener("click", function(){
	overlay.style.height = "100%";
});

$btnTC.addEventListener("click", function(){
	overlay.style.height = "0%";
});
function loadToDo(){
	let task = localStorage.getItem("list")
	if (task && task.trim()) {
		$ul.innerHTML = task;
	}
}


document.querySelector(".pencil").addEventListener("click", function(){
	let p = document.getElementById("addToDo");
	if (p.style.display === 'block') {
		p.style.display = 'none';
	}
	else{
		p.style.display = 'block';
	}
})
}


document.addEventListener("DOMContentLoaded", PageLoaded);