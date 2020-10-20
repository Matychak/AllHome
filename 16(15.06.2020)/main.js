
let allDiv =  document.createElement("div");

allDiv.classList.add('allDiv');
 document.body.insertAdjacentElement("afterbegin",allDiv)
//
let divBtn = document.createElement("div");
divBtn.classList.add('divBtn');
 document.body.insertAdjacentElement("afterbegin",divBtn)
 divBtn.style.marginLeft = "850px"

//Create button 3
let btn3 = document.createElement("button"); // Create button in body
 btn3.classList.add('btn3'); // Create class for btn
 btn3.textContent = "Person 3";// Add text for btn
  btn3.setAttribute("onclick","btnFn()")
 divBtn.insertAdjacentElement("afterbegin",btn3); // Position btn in body

 // Create button 2

 let btn2 = document.createElement("button"); // Create button in body
 btn2.classList.add('btn2'); // Create class for btn

 btn2.textContent = "Person 2";  // Add text for btn
   btn2.setAttribute("onclick","btnFn()")
 divBtn.insertAdjacentElement("afterbegin",btn2); // Position btn in body





//

// Create button 1
let btn1 = document.createElement("button"); // Create button in body
 btn1.classList.add('btn1'); // Create class for btn

 btn1.textContent = "Person 1"; // Add text for btn
   btn1.setAttribute("onclick","btnFn()")
 divBtn.insertAdjacentElement("afterbegin",btn1); // Position btn in body
	
//




//Setting in btn1
let cont = document.createElement("div"); // Create div in body
    cont.classList.add('person1'); // Add class for div
      cont.setAttribute("id","pers1")
	allDiv.insertAdjacentElement("beforeend",cont);
// 		let f2 = document.querySelector(".person2")
// let c2 = document.querySelector(".person3")
document.querySelector(".btn1").addEventListener("click", function(){ // function click
let people1 = new XMLHttpRequest(); // Request

let url1 = "https://swapi.dev/api/people/1/"; // url or api of server

people1.open("GET", url1); // work of server 

people1.send(); // work of server

people1.onload = function(){ 
	if (people1.status !== 200) {// if work server bad in consol show error
		console.log(people1.statusText);	
	}
	else { // else work server nice then code show result 
		let person = JSON.parse(people1.response);
		Show(person)
	}
}

// Position div in body
cont.style.display = "block"
function Show(person){


	console.log(person);
	
    

// It's adding content for div
cont.innerHTML = `Name:${person.name};<br>Skin color:${person.skin_color};<br>Mass:${person.mass};<br>Height:${person.height};<br>Hair color:${person.hair_color};<br>Gender:${person.gender};<br>Eye color:${person.eye_color};<br> Birth year:${person.birth_year};<br>`



	
}
})






//Setting in btn2

 let cont2 = document.createElement("div");// Create div in body
    cont2.classList.add('person2');// Add class for div
      cont2.setAttribute("id","pers2")
		allDiv.insertAdjacentElement("beforeend",cont2);// Position div in body
// cont2.style.display = "block"
document.querySelector(".btn2").addEventListener("click", function(){ // function click
let people2 = new XMLHttpRequest();// Request

let url2 = "https://swapi.dev/api/people/4/"; // url or api of server

people2.open("GET", url2); // work of server 

people2.send();// work of server

people2.onload = function(){// if work server bad in consol show error
	if (people2.status !== 200) {
		console.log(people2.statusText);	
	}
	else {// else work server nice then code show result 
		let person2 = JSON.parse(people2.response);
		Show(person2)
	}
}

cont2.style.display = "block"
function Show(person2){

	console.log(person2);
	
   

// It's adding content for div
cont2.innerHTML = `Name:${person2.name};<br>Skin color:${person2.skin_color};<br>Mass:${person2.mass};<br>Height:${person2.height};<br>Hair color:${person2.hair_color};<br>Gender:${person2.gender};<br>Eye color:${person2.eye_color};<br> Birth year:${person2.birth_year};<br>`

}
})





//Setting in btn3
let cont3 = document.createElement("div");// Create div in body
    cont3.classList.add('person3');// Add class for div
    cont3.setAttribute("id","pers3")
	allDiv.insertAdjacentElement("beforeend",cont3);// Position div in body
document.querySelector(".btn3").addEventListener("click", function(){// function click



let people3 = new XMLHttpRequest();// Request

let url3 = "https://swapi.dev/api/people/5/";// url or api of server

people3.open("GET", url3);// work of server

people3.send();// work of server

people3.onload = function(){// if work server bad in consol show error
	if (people3.status !== 200) {
		console.log(people3.statusText);	
	}
	else {// else work server nice then code show result 
		let person3 = JSON.parse(people3.response);
		Show(person3)
	}
}

cont3.style.display = "block"
function Show(person3){

		



	console.log(person3);

    

// It's adding content for div
cont3.innerHTML = `Name:${person3.name};<br>Skin color:${person3.skin_color};<br>Mass:${person3.mass};<br>Height:${person3.height};<br>Hair color:${person3.hair_color};<br>Gender:${person3.gender};<br>Eye color:${person3.eye_color};<br> Birth year:${person3.birth_year};<br>`


}
})







//



function btnFn() {


    if (cont.style.display === "block" || cont2.style.display === "block" || cont3.style.display === "block") {
    cont.style.display = "none";
        cont2.style.display = "none";
            cont3.style.display = "none";
  } else {
    cont.style.display = "block";
    cont2.style.display = "block";
    cont3.style.display = "block";

  }
}