let array_answer = ["Лелека","Ставок", "Чайник" , "Торт","Вогонь","Цукерка","Зошит","Вікно","Хліб","Свічка"];

let bgc = document.querySelectorAll('.question_user');

let answer_user = document.querySelectorAll('.user_answer');

let answer_text = document.querySelectorAll('.input_user');

let btn_user = document.querySelectorAll('.btn_user');

for (let i = 0; i<bgc.length; i++) {
	btn_user[i].addEventListener("click", function(){

  if(answer_text[i].value == array_answer[i]){
  	bgc[i].style.backgroundColor = "green";
  	answer_user[i].innerHTML = `<img src="./img/coolsmile.jpeg" />`;
  	this.style.height = '100px';
  }
  else{
  	bgc[i].style.backgroundColor = "red";
  	answer_user[i].innerHTML = `<img src="./img/sadsmile.jpeg" />`;
  }

	})
}