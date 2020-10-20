let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
let now = new Date();
let a = 13;
let b = now.getDate() -a;	
	
let c = now.getMonth()+1;
let d = now.getFullYear();		
//
if(b <= 7){
	b = now.getDate() -a + " days ago";

}

if(b >= 7){
 b = b  + "." + "0" +c + "." + d;

}
let arr = ["#lorem","#ipsum","#text"];


		// 

		let div = document.createElement("div");
		//
		let header = document.createElement("h3");
		//
		let date = document.createElement("p");
		//
		let span = document.createElement("span");

	
		//
		let teg = document.createElement("span");

		//
        
        div.classList.add("wrapper");
        header.classList.add("header");
        span.classList.add("span")
        teg.classList.add("teg")

class News{

	constructor(header,text,date,width,height,widthD,heightD,teg){
this.header = header; 
this.text = text; 
// this.array = array; 
this.date = date; 
//
this.styleW = width;
this.styleH = height;
//
this.styleDW = widthD;
this.styleDH = heightD;
this.textTeg = teg;
	}
	print(){


		//
header.innerHTML = `${this.header}`;
		date.innerHTML = `${this.date}`;
		span.innerHTML = `${this.text}<br>`;
		teg.innerHTML = `<br>${this.textTeg}`
		//
		span.style.width = `${this.styleW}px`;
			span.style.height = `${this.styleH}px`
			//
			div.style.width = `${this.styleDW}px`;
			div.style.height = `${this.styleDH}px`;	
	

		
		document.body.insertAdjacentElement("beforeend", div);
		document.querySelector('.wrapper').insertAdjacentElement("afterbegin",header);
		document.querySelector('.wrapper').insertAdjacentElement("beforeend",date);
		document.querySelector('.wrapper').insertAdjacentElement("beforeend",span);
		document.querySelector('.wrapper').insertAdjacentElement("beforeend",teg);
return this;

//



	}
}

let print = new News("What is Lorem Ipsum?",`${text}`,`${b}`,"100","150","490","400",`${arr}`).print();
