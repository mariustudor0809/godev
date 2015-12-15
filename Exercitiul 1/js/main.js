
// Functia de random - intre un min si max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Variabila de get a butonului
var btn = document.getElementById("btn");

// EventListener pe button - care la click activeaza o functie - care afiseaza variabila "random" a functie "random" + stringul "%"
btn.addEventListener('click', function () { 

	console.log("Am apasat pe buton.");
	var random = getRandomInt(0, 100);
	document.getElementById("progress-bar").style.width = random + "%";
	document.getElementById("percent").innerHTML = random + "%";

}, false);

