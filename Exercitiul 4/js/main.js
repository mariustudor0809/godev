


var width = window.innerWidth;
var height = window.innerHeight;


window.addEventListener("resize", function () {
	width = window.innerWidth;
	height = window.innerHeight;
})




document.addEventListener("mousemove", function(event) {

	var clientX = event.clientX;
	var clientY = event.clientY;



	var hue = Math.round(clientX/width * 360);
	var saturation = Math.round(clientY/height * 100) + "%";

	var culoarea = "hsl(" + hue + ", " + saturation + ", 50%)";

	document.body.style.backgroundColor = culoarea;

})
