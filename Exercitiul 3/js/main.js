
var x = document.getElementById("X");
var y = document.getElementById("Y");

var xper = document.getElementById("Xper");
var yper = document.getElementById("Yper");

var width = window.innerWidth;
var height = window.innerHeight;


window.addEventListener("resize", function () {
	width = window.innerWidth;
	height = window.innerHeight;
})


document.addEventListener("mousemove", function(event) {

	console.log(event.clientX, event.clientY);

	x.value = event.clientX;
	y.value = event.clientY;

})


document.addEventListener("mousemove", function(event) {

	var clientX = event.clientX;
	var clientY = event.clientY;

	x.value = clientX;
	y.value = clientY;

	xper.value = Math.round(clientX/width * 100) + "%";
	yper.value = Math.round(clientY/height * 100) + "%";

})








var stars = document.getElementsByClassName("stars");
var input = document.getElementById("rating")

for (var i = 0; i < stars.length; i++) {
	var star = stars[i];

	// Hover 
	star.addEventListener("mouseover", function() {
		var index = this.getAttribute("data-value");

		index = parseInt(index, 10);

		for (var j = 0; j < index; j++) {
			stars[j].classList.add("active");
		};
		
		input.value = index;

	});


star.addEventListener("mouseout", function() {
		for (var j = 0; j < stars.length; j++) {
			stars[j].classList.remove("active");
		};
		
		input.value = "";

	});


};




