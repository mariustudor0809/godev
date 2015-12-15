
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




