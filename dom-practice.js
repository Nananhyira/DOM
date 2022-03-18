let textDisplay = document.getElementById("para")
let btn = document.getElementById("enter")
let random = Math.floor(Math.random()*50)
let div = document.getElementById("view")
let playAgain = document.getElementById("play")
console.log(random)

function guessTheNumber() {
	let input = document.getElementById("input").value
	if (random == input) {
		textDisplay.innerHTML="Hurray you guessed right 🤗  " +""+ "the number is " + random
		textDisplay.style.color ="#9FD603"
		textDisplay.style.animation="blinking 6.5s infinite;"
		div.style.backgroundColor ="#2B5D2B"
		//div.style.backgroundColor ="#2B5D2B"
	}

	else if (isNaN(input)){
		textDisplay.innerHTML = "THAT IS NOT A NUMBER 🙃"
		textDisplay.style.color="#FCEE3D"
		div.style.backgroundColor ="#21325B"
	}
	 else if(input<1){
	 	textDisplay.innerHTML = "Higher it has to be between 1 and 100 😜"
	 	textDisplay.style.color="#E79D90"
		div.style.backgroundColor ="#64508F"
	 }
	 else if (input<random && input>100){
	 	textDisplay.innerHTML = "your guess is too high🤭  , guess again ,this time between 1 and 100"
		textDisplay.style.color="red"
		div.style.backgroundColor ="#B9E3DA"
		 	
	 }
	else if (input < random && input >1){
		textDisplay.innerHTML="you Guessed too low 🤔"
	 	textDisplay.style.color="#F8741C"
	 	div.style.backgroundColor ="#2F2F2F"

	} 
	else if(input>random &&input<=100){
	 		textDisplay.innerHTML ="YOUr GUESS IS TOO HIGH, GUESS AGAIN ,THIS TIME LOWER 😬" 
	 		textDisplay.style.color = "red"
	 		div.style.backgroundColor ="#603C44"
	 	}

	else {
	 		textDisplay.innerHTML="you can't win a Jackpot A hole 🥵 Guess Again"
	 		textDisplay.style.color = "pink"
	 		div.style.backgroundColor ="#B9E3DA"
	 	} 	

	
}


btn.addEventListener("click", guessTheNumber)
playAgain.addEventListener("click", function(){location.reload()})
