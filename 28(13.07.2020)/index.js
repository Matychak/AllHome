
class ShowText{

	constructor(font_size,color,font,text){
this.fontSize = font_size;
this.style = color;
this.fontFam = font; 
this.text = text;
	}
	print(){
		let span = document.createElement("p")
		span.style.fontSize = `${this.fontSize}px`;
		span.style.fontFamily = `${this.fontFam}`
		span.style.color = `${this.style}`;
		span.textContent = `${this.text}`
		
		document.querySelector('.wrapper').insertAdjacentElement("beforeend",span);
	return this;
}
}

let printt = new ShowText("30","red","Courier New", "Hello world").print();